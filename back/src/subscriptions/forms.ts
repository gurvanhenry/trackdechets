import { FormSubscriptionPayload, prisma } from "../generated/prisma-client";
import { sendMail } from "../common/mails.helper";
import { userMails } from "../users/mails";

export function formsSubscriptionCallback(payload: FormSubscriptionPayload) {
  mailToInexistantRecipient(payload).catch(err =>
    console.error("Error on inexistant recipient subscription", err)
  );
}

async function mailToInexistantRecipient(payload: FormSubscriptionPayload) {
  console.info('SUB FORM "mailToInexistantRecipient" triggered');
  if (payload.updatedFields && payload.updatedFields.includes("isDeleted")) {
    return;
  }

  const previousRecipientSiret = payload.previousValues
    ? payload.previousValues.recipientCompanySiret
    : null;
  const recipientSiret = payload.node.recipientCompanySiret;
  const recipientMail = payload.node.recipientCompanyMail;
  const recipientName =
    payload.node.recipientCompanyName || "Monsieur / Madame";

  if (
    !recipientSiret ||
    !recipientMail ||
    previousRecipientSiret === recipientSiret
  ) {
    return;
  }

  const companyExists = await prisma.$exists.company({ siret: recipientSiret });
  if (companyExists) {
    return;
  }

  return sendMail(userMails.contentAwaitsGuest(recipientMail, recipientName));
}
