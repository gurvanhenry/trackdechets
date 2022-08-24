import { Bsff, BsffStatus } from "@prisma/client";
import prisma from "../prisma";
import { BsdElastic, indexBsd, indexBsds } from "../common/elastic";
import { GraphQLContext } from "../types";
import { getRegistryFields } from "./registry";
import { BsffPackaging } from "../generated/graphql/types";

function toBsdElastic(
  bsff: Bsff & { packagings: BsffPackaging[] }
): BsdElastic {
  const bsd = {
    type: "BSFF" as const,
    id: bsff.id,
    readableId: bsff.id,
    customId: "",
    createdAt: bsff.createdAt.getTime(),
    emitterCompanyName: bsff.emitterCompanyName ?? "",
    emitterCompanySiret: bsff.emitterCompanySiret ?? "",
    transporterCompanyName: bsff.transporterCompanyName ?? "",
    transporterCompanySiret: bsff.transporterCompanySiret ?? "",
    transporterTakenOverAt:
      bsff.transporterTransportTakenOverAt?.getTime() ??
      bsff.transporterTransportSignatureDate?.getTime(),
    transporterCustomInfo: bsff.transporterCustomInfo ?? "",
    destinationCompanyName: bsff.destinationCompanyName ?? "",
    destinationCompanySiret: bsff.destinationCompanySiret ?? "",
    destinationReceptionDate: bsff.destinationReceptionDate?.getTime(),
    destinationReceptionWeight: bsff.destinationReceptionWeight,
    destinationOperationCode: bsff.destinationOperationCode ?? "",
    destinationOperationDate: bsff.destinationOperationSignatureDate?.getTime(),
    wasteCode: bsff.wasteCode ?? "",
    wasteDescription: bsff.wasteDescription ?? "",
    containers: bsff.packagings.map(packaging => packaging.numero),
    isDraftFor: [],
    isForActionFor: [],
    isFollowFor: [],
    isArchivedFor: [],
    isToCollectFor: [],
    isCollectedFor: [],
    sirets: [
      bsff.emitterCompanySiret,
      bsff.transporterCompanySiret,
      bsff.destinationCompanySiret
    ],
    ...getRegistryFields(bsff)
  };

  if (bsff.isDraft) {
    bsd.isDraftFor.push(
      bsff.emitterCompanySiret,
      bsff.transporterCompanySiret,
      bsff.destinationCompanySiret
    );
  } else {
    switch (bsff.status) {
      case BsffStatus.INITIAL: {
        bsd.isForActionFor.push(bsff.emitterCompanySiret);
        bsd.isFollowFor.push(
          bsff.transporterCompanySiret,
          bsff.destinationCompanySiret
        );
        break;
      }
      case BsffStatus.SIGNED_BY_EMITTER: {
        bsd.isToCollectFor.push(bsff.transporterCompanySiret);
        bsd.isFollowFor.push(
          bsff.emitterCompanySiret,
          bsff.destinationCompanySiret
        );
        break;
      }
      case BsffStatus.SENT: {
        bsd.isCollectedFor.push(bsff.transporterCompanySiret);
        bsd.isFollowFor.push(bsff.emitterCompanySiret);
        bsd.isForActionFor.push(bsff.destinationCompanySiret);
        break;
      }
      case BsffStatus.RECEIVED: {
        bsd.isFollowFor.push(
          bsff.emitterCompanySiret,
          bsff.transporterCompanySiret
        );
        bsd.isForActionFor.push(bsff.destinationCompanySiret);
        break;
      }
      case BsffStatus.INTERMEDIATELY_PROCESSED: {
        bsd.isFollowFor.push(
          bsff.emitterCompanySiret,
          bsff.transporterCompanySiret,
          bsff.destinationCompanySiret
        );
        break;
      }
      case BsffStatus.REFUSED:
      case BsffStatus.PROCESSED: {
        bsd.isArchivedFor.push(
          bsff.emitterCompanySiret,
          bsff.transporterCompanySiret,
          bsff.destinationCompanySiret
        );
        break;
      }
      default:
        break;
    }
  }

  return bsd;
}

export async function indexAllBsffs(
  idx: string,
  { skip = 0 }: { skip?: number } = {}
) {
  const take = 500;
  const bsffs = await prisma.bsff.findMany({
    skip,
    take,
    where: {
      isDeleted: false
    },
    include: { packagings: true }
  });

  if (bsffs.length === 0) {
    return;
  }

  await indexBsds(
    idx,
    bsffs.map(bsff => toBsdElastic(bsff))
  );

  if (bsffs.length < take) {
    // all forms have been indexed
    return;
  }

  return indexAllBsffs(idx, { skip: skip + take });
}

export async function indexBsff(bsff: Bsff, ctx?: GraphQLContext) {
  const packagings = await prisma.bsff
    .findUnique({ where: { id: bsff.id } })
    .packagings();
  return indexBsd(toBsdElastic({ ...bsff, packagings }), ctx);
}
