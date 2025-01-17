import { MutationResolvers } from "../../../generated/graphql/types";
import { checkIsAuthenticated } from "../../../common/permissions";
import { getBsffOrNotFound, getPreviousBsffs } from "../../database";
import { isBsffContributor } from "../../permissions";
import prisma from "../../../prisma";
import { expandBsffFromDB } from "../../converter";
import { indexBsff } from "../../elastic";
import { validateBsff } from "../../validation";

const publishBsffResolver: MutationResolvers["publishBsff"] = async (
  _,
  { id },
  context
) => {
  const user = checkIsAuthenticated(context);
  const existingBsff = await getBsffOrNotFound({ id });

  const packagings = await prisma.bsff
    .findUnique({ where: { id: existingBsff.id } })
    .packagings();

  await isBsffContributor(user, existingBsff);

  const previousBsffs = await getPreviousBsffs(existingBsff);

  const ficheInterventions = await prisma.bsffFicheIntervention.findMany({
    where: { bsffs: { some: { id: { in: [existingBsff.id] } } } }
  });

  await validateBsff(
    { ...existingBsff, packagings, isDraft: false },
    previousBsffs,
    ficheInterventions
  );

  const updatedBsff = await prisma.bsff.update({
    data: {
      isDraft: false
    },
    where: {
      id: existingBsff.id
    }
  });

  await indexBsff(updatedBsff, context);

  return expandBsffFromDB(updatedBsff);
};

export default publishBsffResolver;
