import { Form, Status, User } from "@prisma/client";
import { ForbiddenError } from "apollo-server-express";
import prisma from "../prisma";
import { FormCompanies } from "./types";

import { getCachedUserCompanies } from "../common/redis/users";

import { getFullForm } from "./database";
import { InvaliSecurityCode, NotFormContributor } from "./errors";
import { getFormRepository } from "./repository";

export async function formToCompanies(form: Form): Promise<FormCompanies> {
  const fullForm = await getFullForm(form);
  return {
    emitterCompanySiret: fullForm.emitterCompanySiret,
    recipientCompanySiret: fullForm.recipientCompanySiret,
    transporterCompanySiret: fullForm.transporterCompanySiret,
    traderCompanySiret: fullForm.traderCompanySiret,
    brokerCompanySiret: fullForm.brokerCompanySiret,
    ecoOrganismeSiret: fullForm.ecoOrganismeSiret,
    ...(fullForm.intermediaries?.length
      ? {
          intermediariesVatNumbers: fullForm.intermediaries.map(
            int => int.vatNumber ?? null
          ),
          intermediariesSirets: fullForm.intermediaries.map(
            int => int.siret ?? null
          )
        }
      : {}),
    ...(fullForm.transportSegments?.length
      ? {
          transportSegments: fullForm.transportSegments.map(seg => ({
            transporterCompanySiret: seg.transporterCompanySiret
          }))
        }
      : {}),
    ...(fullForm.forwardedIn
      ? {
          forwardedIn: {
            recipientCompanySiret: fullForm.forwardedIn.recipientCompanySiret,
            transporterCompanySiret:
              fullForm.forwardedIn.transporterCompanySiret
          }
        }
      : {})
  };
}

function isFormEmitter(userCompaniesSiretOrVat: string[], form: FormCompanies) {
  if (!form.emitterCompanySiret) {
    return false;
  }

  return userCompaniesSiretOrVat.includes(form.emitterCompanySiret);
}

function isFormRecipient(
  userCompaniesSiretOrVat: string[],
  form: FormCompanies
) {
  if (!form.recipientCompanySiret) {
    return false;
  }

  return userCompaniesSiretOrVat.includes(form.recipientCompanySiret);
}

function isFormTransporter(
  userCompaniesSiretOrVat: string[],
  form: FormCompanies
) {
  if (!form.transporterCompanySiret) {
    return false;
  }

  return userCompaniesSiretOrVat.includes(form.transporterCompanySiret);
}

function isFormTrader(userCompaniesSiretOrVat: string[], form: FormCompanies) {
  if (!form.traderCompanySiret) {
    return false;
  }

  return userCompaniesSiretOrVat.includes(form.traderCompanySiret);
}

function isFormBroker(userCompaniesSiretOrVat: string[], form: FormCompanies) {
  if (!form.brokerCompanySiret) {
    return false;
  }

  return userCompaniesSiretOrVat.includes(form.brokerCompanySiret);
}

function isFormEcoOrganisme(
  userCompaniesSiretOrVat: string[],
  form: FormCompanies
) {
  if (!form.ecoOrganismeSiret) {
    return false;
  }

  return userCompaniesSiretOrVat.includes(form.ecoOrganismeSiret);
}

function isFormDestinationAfterTempStorage(
  userCompaniesSiretOrVat: string[],
  form: FormCompanies
) {
  if (!form.forwardedIn) {
    return false;
  }

  return userCompaniesSiretOrVat.includes(
    form.forwardedIn.recipientCompanySiret
  );
}

function isFormTransporterAfterTempStorage(
  userCompaniesSiretOrVat: string[],
  form: FormCompanies
) {
  if (!form.forwardedIn) {
    return false;
  }

  return userCompaniesSiretOrVat.includes(
    form.forwardedIn.transporterCompanySiret
  );
}

function isFormMultiModalTransporter(
  userCompaniesSiretOrVat: string[],
  form: FormCompanies
) {
  if (!form.transportSegments) {
    return false;
  }

  const transportSegmentSirets = form.transportSegments.map(
    segment => segment.transporterCompanySiret
  );
  return transportSegmentSirets.some(s => userCompaniesSiretOrVat.includes(s));
}

function isFormIntermediary(userCompanies: string[], form: FormCompanies) {
  if (
    !form.intermediariesVatNumbers?.length &&
    !form.intermediariesSirets?.length
  ) {
    return false;
  }
  const intermediaryCompanyIds = [
    ...(form.intermediariesVatNumbers ? form.intermediariesVatNumbers : []),
    ...(form.intermediariesSirets ? form.intermediariesSirets : [])
  ];

  return intermediaryCompanyIds.some(i => userCompanies.includes(i));
}

export async function isFormContributor(user: User, form: FormCompanies) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  // fetch both vatNumber and siret
  const userCompanies = await getCachedUserCompanies(user.id);
  const isFormCompanyIdContributor = isFormIntermediary(userCompanies, form);
  const isFormSiretContributor = [
    isFormEmitter,
    isFormRecipient,
    isFormTrader,
    isFormBroker,
    isFormTransporter,
    isFormEcoOrganisme,
    isFormTransporterAfterTempStorage,
    isFormDestinationAfterTempStorage,
    isFormMultiModalTransporter
  ].some(isFormRole => isFormRole(userCompaniesSiretOrVat, form));
  return isFormCompanyIdContributor || isFormSiretContributor;
}

async function isFormInitialEmitter(user: User, form: Form) {
  const { findAppendix2FormsById } = getFormRepository(user);
  const appendix2Forms = await findAppendix2FormsById(form.id);
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  return appendix2Forms.reduce(
    (acc, f) => acc || isFormEmitter(userCompaniesSiretOrVat, f),
    false
  );
}

/**
 * Check that at least one of user's company is present somewhere in the form
 * or throw a NotFormContributor
 * */
export async function checkIsFormContributor(
  user: User,
  form: FormCompanies,
  errorMsg: string
) {
  const isContributor = await isFormContributor(user, form);

  if (!isContributor) {
    throw new NotFormContributor(errorMsg);
  }

  return true;
}

export async function checkCanRead(user: User, form: Form) {
  const formCompanies = await formToCompanies(form);
  const isContributor = await isFormContributor(user, formCompanies);
  if (isContributor) {
    return true;
  }
  if (form.emitterType === "APPENDIX2") {
    const isInitialEmitter = await isFormInitialEmitter(user, form);
    if (isInitialEmitter) {
      return true;
    }
  }

  throw new NotFormContributor(
    "Vous n'êtes pas autorisé à accéder à ce bordereau"
  );
}

export async function checkCanDuplicate(user: User, form: Form) {
  return checkIsFormContributor(
    user,
    await formToCompanies(form),
    "Vous n'êtes pas autorisé à dupliquer ce bordereau"
  );
}

export async function checkCanUpdate(user: User, form: Form) {
  await checkIsFormContributor(
    user,
    await formToCompanies(form),
    "Vous n'êtes pas autorisé à modifier ce bordereau"
  );

  if (form.status === "SIGNED_BY_PRODUCER") {
    const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);

    if (
      form.emittedByEcoOrganisme &&
      !userCompaniesSiretOrVat.includes(form.ecoOrganismeSiret)
    ) {
      throw new ForbiddenError(
        "L'éco-organisme a signé ce bordereau, il est le seul à pouvoir le mettre à jour."
      );
    }

    if (!userCompaniesSiretOrVat.includes(form.emitterCompanySiret)) {
      throw new ForbiddenError(
        "Le producteur a signé ce bordereau, il est le seul à pouvoir le mettre à jour."
      );
    }
  } else if (!["DRAFT", "SEALED"].includes(form.status)) {
    throw new ForbiddenError(
      "Seuls les bordereaux en brouillon ou en attente de collecte peuvent être modifiés"
    );
  }

  return true;
}

export async function checkCanDelete(user: User, form: Form) {
  await checkIsFormContributor(
    user,
    await formToCompanies(form),
    "Vous n'êtes pas autorisé à supprimer ce bordereau"
  );

  if (form.status === "SIGNED_BY_PRODUCER") {
    const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);

    if (
      form.emittedByEcoOrganisme &&
      !userCompaniesSiretOrVat.includes(form.ecoOrganismeSiret)
    ) {
      throw new ForbiddenError(
        "L'éco-organisme a signé ce bordereau, il est le seul à pouvoir le supprimer."
      );
    }

    if (!userCompaniesSiretOrVat.includes(form.emitterCompanySiret)) {
      throw new ForbiddenError(
        "Le producteur a signé ce bordereau, il est le seul à pouvoir le supprimer."
      );
    }
  } else if (!["DRAFT", "SEALED"].includes(form.status)) {
    throw new ForbiddenError(
      "Seuls les bordereaux en brouillon ou en attente de collecte peuvent être supprimés"
    );
  }

  return true;
}

export async function checkCanUpdateTransporterFields(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  // check if Intermediary can update Transporter fields
  if (!isFormTransporter(userCompaniesSiretOrVat, form)) {
    throw new ForbiddenError("Vous n'êtes pas transporteur de ce bordereau.");
  }
}

export async function checkCanMarkAsSealed(user: User, form: Form) {
  return checkIsFormContributor(
    user,
    await formToCompanies(form),
    "Vous n'êtes pas autorisé à sceller ce bordereau"
  );
}

export async function checkCanMarkAsSent(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const formCompanies = await formToCompanies(form);

  const isAuthorized = [isFormRecipient, isFormEmitter].some(isFormRole =>
    isFormRole(userCompaniesSiretOrVat, formCompanies)
  );
  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous n'êtes pas autorisé à marquer ce bordereau comme envoyé"
    );
  }
  return true;
}

export async function checkCanSignFor(
  siret: string,
  user: User,
  securityCode?: number
) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);

  if (userCompaniesSiretOrVat.includes(siret)) {
    return true;
  }

  if (securityCode) {
    return checkSecurityCode(siret, securityCode);
  }

  throw new ForbiddenError(
    "Vous n'êtes pas autorisé à signer ce bordereau pour cet acteur"
  );
}

export async function checkCanSignedByTransporter(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const formCompanies = await formToCompanies(form);
  const isAuthorized = [
    isFormTransporter,
    isFormTransporterAfterTempStorage
  ].some(isFormRole => isFormRole(userCompaniesSiretOrVat, formCompanies));

  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous n'êtes pas autorisé à signer ce bordereau pour le transport"
    );
  }
  return true;
}

export async function checkCanMarkAsReceived(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const formCompanies = await formToCompanies(form);
  const isAuthorized = form.forwardedInId
    ? isFormDestinationAfterTempStorage(userCompaniesSiretOrVat, formCompanies)
    : isFormRecipient(userCompaniesSiretOrVat, formCompanies);

  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous n'êtes pas autorisé à réceptionner ce bordereau"
    );
  }
  return true;
}

export async function checkCanMarkAsAccepted(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const formCompanies = await formToCompanies(form);
  const isAuthorized = form.forwardedInId
    ? isFormDestinationAfterTempStorage(userCompaniesSiretOrVat, formCompanies)
    : isFormRecipient(userCompaniesSiretOrVat, formCompanies);
  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous n'êtes pas autorisé à marquer ce bordereau comme accepté"
    );
  }
  return true;
}

export async function checkCanMarkAsProcessed(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const formCompanies = await formToCompanies(form);
  const isAuthorized = form.forwardedInId
    ? isFormDestinationAfterTempStorage(
        userCompaniesSiretOrVat,
        formCompanies
      ) ||
      // case when the temp storer decides to do an anticipated treatment
      (form.status === Status.TEMP_STORER_ACCEPTED &&
        isFormRecipient(userCompaniesSiretOrVat, formCompanies))
    : isFormRecipient(userCompaniesSiretOrVat, formCompanies);

  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous n'êtes pas autorisé à marquer ce bordereau comme traité"
    );
  }
  return true;
}

export async function checkCanMarkAsTempStored(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const formCompanies = await formToCompanies(form);

  const isAuthorized = isFormRecipient(userCompaniesSiretOrVat, formCompanies);
  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous n'êtes pas autorisé à marquer ce bordereau comme entreposé provisoirement"
    );
  }
  return true;
}

export async function checkCanMarkAsTempStorerAccepted(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const formCompanies = await formToCompanies(form);

  const isAuthorized = isFormRecipient(userCompaniesSiretOrVat, formCompanies);
  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous n'êtes pas autorisé à marquer ce bordereau comme entreposé provisoirement"
    );
  }
  return true;
}

export async function checkCanMarkAsResealed(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const formCompanies = await formToCompanies(form);

  const isAuthorized = isFormRecipient(userCompaniesSiretOrVat, formCompanies);
  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous n'êtes pas autorisé à sceller ce bordereau après entreposage provisoire"
    );
  }
  return true;
}

export async function checkCanMarkAsResent(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const formCompanies = await formToCompanies(form);

  const isAuthorized = isFormRecipient(userCompaniesSiretOrVat, formCompanies);
  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous n'êtes pas autorisé à marquer ce borderau comme envoyé après entreposage provisoire"
    );
  }
  return true;
}

// only recipient of the form can import data from paper
export async function checkCanImportForm(user: User, form: Form) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);
  const isAuthorized = isFormRecipient(userCompaniesSiretOrVat, form);
  if (!isAuthorized) {
    throw new ForbiddenError(
      "Vous devez apparaitre en tant que destinataire du bordereau (case 2) pour pouvoir mettre à jour ce bordereau"
    );
  }
  return true;
}

export async function checkSecurityCode(siret: string, securityCode: number) {
  const exists = await prisma.company.findFirst({
    where: { siret, securityCode }
  });
  if (!exists) {
    throw new InvaliSecurityCode();
  }
  return true;
}

export async function checkCanRequestRevision(
  user: User,
  form: Form,
  forwardedIn?: Form
) {
  const userCompaniesSiretOrVat = await getCachedUserCompanies(user.id);

  const canRequestRevision = [
    isFormEmitter,
    isFormRecipient,
    isFormDestinationAfterTempStorage
  ].some(isFormRole =>
    isFormRole(userCompaniesSiretOrVat, { ...form, forwardedIn })
  );

  if (!canRequestRevision) {
    throw new NotFormContributor(
      "Vous n'êtes pas autorisé à réviser ce bordereau"
    );
  }

  return true;
}
