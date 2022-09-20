import prisma from "../../../prisma";
import { MutationResolvers } from "../../../generated/graphql/types";
import { checkIsAuthenticated } from "../../../common/permissions";
import { applyAuthStrategies, AuthType } from "../../../auth";
import deleteUser from "../../../scripts/prisma/deleteUser";

/**
 * Edit user profile
 * @param userId
 */
export async function deleteUserFn(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  await deleteUser(user);
}

const deleteUserResolver: MutationResolvers["deleteUser"] = (
  parent,
  args,
  context
) => {
  applyAuthStrategies(context, [AuthType.Session]);

  const user = checkIsAuthenticated(context);

  return deleteUserFn(user.id);
};

export default deleteUserResolver;
