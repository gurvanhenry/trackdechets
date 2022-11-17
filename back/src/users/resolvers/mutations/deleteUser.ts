import prisma from "../../../prisma";
import { MutationResolvers } from "../../../generated/graphql/types";
import { checkIsAdmin } from "../../../common/permissions";
import { applyAuthStrategies, AuthType } from "../../../auth";
import deleteUser from "../../../scripts/prisma/deleteUser";
import { UserInputError } from "apollo-server-core";

/**
 * Edit user profile
 * @param userId
 */
export async function deleteUserFn(userId: string): Promise<boolean> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new UserInputError(`Utilisateur ${userId} introuvable`);
  }
  try {
    await deleteUser(user);
    return true;
  } catch (err) {
    throw new UserInputError(`Impossible de supprimer cet utilisateur: ${err}`);
  }
}

const deleteUserResolver: MutationResolvers["deleteUser"] = (
  _,
  { id: userId },
  context
) => {
  applyAuthStrategies(context, [AuthType.Session]);
  checkIsAdmin(context);
  return deleteUserFn(userId);
};

export default deleteUserResolver;
