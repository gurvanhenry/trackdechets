import prisma from "../../../prisma";
import { checkIsAuthenticated } from "../../../common/permissions";
import { MutationResolvers } from "../../../generated/graphql/types";

import { getBsvhuOrNotFound } from "../../database";
import { expandVhuFormFromDb } from "../../converter";
import { checkCanDeleteBsdvhu } from "../../permissions";
import * as elastic from "../../../common/elastic";
/**
 *
 * Mark a VHU as deleted
 */
const deleteBsvhuResolver: MutationResolvers["deleteBsvhu"] = async (
  _,
  { id },
  context
) => {
  const user = checkIsAuthenticated(context);

  const bshvhu = await getBsvhuOrNotFound(id);
  // user must belong to the vhu, and status must be INITIAL

  await checkCanDeleteBsdvhu(user, bshvhu);

  const deletedBsvhu = await prisma.bsvhu.update({
    where: { id },
    data: { isDeleted: true }
  });

  await elastic.deleteBsd(deletedBsvhu, context);

  return expandVhuFormFromDb(deletedBsvhu);
};

export default deleteBsvhuResolver;
