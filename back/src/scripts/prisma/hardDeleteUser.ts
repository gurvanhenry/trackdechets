import { User } from "@prisma/client";
import { PRISMA_TRANSACTION_TIMEOUT } from "../../common/repository/helper";
import logger from "../../logging/logger";
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

  try {
    await prisma.$transaction(
      async transaction => {
        await deleteUserCompanyAssociations(user, transaction);
        await deleteUserActivationHashes(user, transaction);
        await deleteUserAccessTokens(user, transaction);
        await deleteUserGrants(user, transaction);
        await deleteMembershipRequest(user, transaction);

        await prisma.user.delete({
          where: { id: user.id }
        });
      },
      { timeout: PRISMA_TRANSACTION_TIMEOUT }
    );
  } catch (err) {
    logger.error(`Error during deleteUser transaction`, err);
    throw err;
  }
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
