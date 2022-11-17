import { User } from "@prisma/client";
import { PrismaTransaction } from "../../common/repository/types";
import { PRISMA_TRANSACTION_TIMEOUT } from "../../common/repository/helper";
import logger from "../../logging/logger";
import prisma from "../../prisma";

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

async function checkCompanyAssociations(user: User): Promise<string[]> {
  const errors = [];
  const companyAssociations = await prisma.companyAssociation.findMany({
    where: {
      user: {
        id: user.id
      }
    },
    include: {
      company: { select: { id: true } }
    }
  });

  for (const association of companyAssociations) {
    if (association.role !== "ADMIN") {
      continue;
    }

    const otherAdmins = await prisma.companyAssociation.findMany({
      where: {
        role: "ADMIN",
        user: {
          id: { not: user.id }
        },
        company: {
          id: association.company.id
        }
      }
    });
    if (otherAdmins.length <= 0) {
      errors.push(
        `Impossible de supprimer cet utilisateur car il est le seul administrateur de l'entreprise ${association.company.id}.`
      );
    }
  }

  return errors;
}

async function deleteUserCompanyAssociations(
  user: User,
  prisma: PrismaTransaction
) {
  await prisma.companyAssociation.deleteMany({
    where: {
      user: {
        id: user.id
      }
    }
  });
}

async function checkApplications(user: User): Promise<string[]> {
  const errors = [];
  const applications = await prisma.application.findMany({
    where: {
      adminId: user.id
    }
  });
  for (const application of applications) {
    errors.push(
      `Impossible de supprimer cet utilisateur car il est le seul administrateur de l'application ${application.id}.`
    );
  }

  return errors;
}

async function deleteUserActivationHashes(
  user: User,
  prisma: PrismaTransaction
) {
  await prisma.userActivationHash.deleteMany({
    where: {
      user: {
        id: user.id
      }
    }
  });
}

async function deleteUserAccessTokens(user: User, prisma: PrismaTransaction) {
  await prisma.accessToken.deleteMany({
    where: {
      user: {
        id: user.id
      }
    }
  });
}

async function deleteUserGrants(user: User, prisma: PrismaTransaction) {
  await prisma.grant.deleteMany({
    where: {
      user: {
        id: user.id
      }
    }
  });
}
