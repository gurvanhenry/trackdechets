import { User } from "@prisma/client";
import prisma from "../../prisma";
import {
  checkCompanyAssociations,
  checkApplications,
  deleteMembershipRequest,
  deleteUserAccessTokens,
  deleteUserActivationHashes,
  deleteUserCompanyAssociations,
  deleteUserGrants
} from "../../users/resolvers/mutations/deleteUser";

/**
 * WARNING : this is irreversible
 */
export default async function deleteUser(user: User) {
  const errors = [
    ...(await checkForms(user)),
    ...(await checkStatusLogs(user)),
    ...(await checkCompanyAssociations(user)),
    ...(await checkApplications(user))
  ];

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  await deleteUserCompanyAssociations(user, prisma);
  await deleteUserActivationHashes(user, prisma);
  await deleteUserAccessTokens(user, prisma);
  await deleteUserGrants(user, prisma);
  await deleteMembershipRequest(user, prisma);

  await prisma.user.delete({
    where: { id: user.id }
  });
}

async function checkForms(user: User): Promise<string[]> {
  const forms = await prisma.form.findMany({
    where: {
      owner: {
        id: user.id
      }
    }
  });

  if (forms.length > 0) {
    return [
      `Impossible de supprimer cet utilisateur car il est propriétaire de ${forms.length} BSDs.`
    ];
  }

  return [];
}

async function checkStatusLogs(user: User): Promise<string[]> {
  const statusLogs = await prisma.statusLog.findMany({
    where: {
      user: {
        id: user.id
      }
    }
  });

  if (statusLogs.length > 0) {
    return [
      `Impossible de supprimer cet utilisateur car il est propriétaire de ${statusLogs.length} status logs.`
    ];
  }

  return [];
}
