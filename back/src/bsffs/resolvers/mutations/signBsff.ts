import {
  BsffStatus,
  Bsff,
  WasteAcceptationStatus,
  BsffPackaging
} from "@prisma/client";
import { UserInputError } from "apollo-server-express";
import { checkIsAuthenticated } from "../../../common/permissions";
import {
  BsffSignatureType,
  MutationResolvers,
  MutationSignBsffArgs
} from "../../../generated/graphql/types";
import prisma from "../../../prisma";
import {
  validateBeforeEmission,
  validateBeforeOperation,
  validateBeforeReception,
  validateBeforeTransport
} from "../../validation";
import { expandBsffFromDB } from "../../converter";
import { getBsffHistory, getBsffOrNotFound } from "../../database";
import { indexBsff } from "../../elastic";
import { OPERATION } from "../../constants";

async function checkIsAllowed(
  siret: string | null,
  user: Express.User,
  securityCode: number | null
) {
  if (siret == null) {
    throw new UserInputError(
      `Les informations relatives à l'acteur pour lequel vous souhaitez signer sont manquantes.`
    );
  }

  if (securityCode) {
    const count = await prisma.company.count({
      where: {
        siret,
        securityCode
      }
    });
    if (count <= 0) {
      throw new UserInputError(`Le code de sécurité est incorrect.`);
    }
  } else {
    const count = await prisma.companyAssociation.count({
      where: {
        userId: user.id,
        company: {
          siret
        }
      }
    });
    if (count <= 0) {
      throw new UserInputError(
        `Vous n'êtes pas autorisé à signer pour cet acteur.`
      );
    }
  }
}

const signatures: Record<
  BsffSignatureType,
  (
    args: MutationSignBsffArgs,
    user: Express.User,
    existingBsff: Bsff & { packagings: BsffPackaging[] }
  ) => Promise<Bsff>
> = {
  EMISSION: async ({ id, signature, securityCode }, user, existingBsff) => {
    await checkIsAllowed(existingBsff.emitterCompanySiret, user, securityCode);
    await validateBeforeEmission(existingBsff);

    return prisma.bsff.update({
      data: {
        status: BsffStatus.SIGNED_BY_EMITTER,
        emitterEmissionSignatureDate: signature.date,
        emitterEmissionSignatureAuthor: signature.author
      },
      where: {
        id
      }
    });
  },
  TRANSPORT: async ({ id, signature, securityCode }, user, existingBsff) => {
    await checkIsAllowed(
      existingBsff.transporterCompanySiret,
      user,
      securityCode
    );
    const packagings = await prisma.bsff
      .findUnique({ where: { id: existingBsff.id } })
      .packagings();
    await validateBeforeTransport({ ...existingBsff, packagings });

    return prisma.bsff.update({
      data: {
        status: BsffStatus.SENT,
        transporterTransportSignatureDate: signature.date,
        transporterTransportSignatureAuthor: signature.author
      },
      where: {
        id
      }
    });
  },
  RECEPTION: async ({ id, signature, securityCode }, user, existingBsff) => {
    await checkIsAllowed(
      existingBsff.destinationCompanySiret,
      user,
      securityCode
    );
    await validateBeforeReception(existingBsff);

    return prisma.bsff.update({
      data: {
        status:
          existingBsff.destinationReceptionAcceptationStatus ===
          WasteAcceptationStatus.ACCEPTED
            ? BsffStatus.RECEIVED
            : BsffStatus.REFUSED,
        destinationReceptionSignatureDate: signature.date,
        destinationReceptionSignatureAuthor: signature.author
      },
      where: {
        id
      }
    });
  },
  OPERATION: async ({ id, signature, securityCode }, user, existingBsff) => {
    await checkIsAllowed(
      existingBsff.destinationCompanySiret,
      user,
      securityCode
    );
    await validateBeforeOperation(existingBsff);

    const status =
      OPERATION[existingBsff.destinationOperationCode].successors.length > 0
        ? BsffStatus.INTERMEDIATELY_PROCESSED
        : BsffStatus.PROCESSED;

    const previousBsffsIds = (await getBsffHistory(existingBsff)).map(
      bsff => bsff.id
    );

    if (status === BsffStatus.PROCESSED && previousBsffsIds.length > 0) {
      await prisma.bsff.updateMany({
        data: {
          status: BsffStatus.PROCESSED
        },
        where: {
          id: { in: previousBsffsIds }
        }
      });
      const updatedBsffs = await prisma.bsff.findMany({
        where: { id: { in: previousBsffsIds } }
      });
      await Promise.all(updatedBsffs.map(bsff => indexBsff(bsff)));
    }

    return prisma.bsff.update({
      data: {
        status,
        destinationOperationSignatureDate: signature.date,
        destinationOperationSignatureAuthor: signature.author
      },
      where: {
        id
      }
    });
  }
};

const signBsff: MutationResolvers["signBsff"] = async (_, args, context) => {
  const user = checkIsAuthenticated(context);
  const existingBsff = await getBsffOrNotFound({ id: args.id });
  const packagings = await prisma.bsff
    .findUnique({ where: { id: existingBsff.id } })
    .packagings();
  const sign = signatures[args.type];
  const updatedBsff = await sign(args, user, { ...existingBsff, packagings });

  await indexBsff(updatedBsff, context);

  return expandBsffFromDB(updatedBsff);
};

export default signBsff;
