import { MutationResolvers } from "../../../generated/graphql/types";
import { checkIsAuthenticated } from "../../../common/permissions";
import transitionForm from "../../workflow/transitionForm";
import { getFormOrFormNotFound } from "../../database";
import { checkCanMarkAsTempStorerAccepted } from "../../permissions";
import { EventType } from "../../workflow/types";
import { expandFormFromDb } from "../../converter";
import { Prisma, WasteAcceptationStatus } from "@prisma/client";
import { getFormRepository } from "../../repository";
import { acceptedInfoSchema } from "../../validation";
import { renderFormRefusedEmail } from "../../mail/renderFormRefusedEmail";
import { sendMail } from "../../../mailer/mailing";
import { runInTransaction } from "../../../common/repository/helper";

const markAsTempStorerAcceptedResolver: MutationResolvers["markAsTempStorerAccepted"] =
  async (_, args, context) => {
    const user = checkIsAuthenticated(context);
    const { id, tempStorerAcceptedInfo } = args;
    const form = await getFormOrFormNotFound({ id });

    await checkCanMarkAsTempStorerAccepted(user, form);

    await acceptedInfoSchema.validate(tempStorerAcceptedInfo);

    const { quantityType, ...tmpStorerAcceptedInfo } = tempStorerAcceptedInfo;

    const formUpdateInput: Prisma.FormUpdateInput = {
      ...tmpStorerAcceptedInfo,
      signedAt: new Date(tempStorerAcceptedInfo.signedAt),
      forwardedIn: {
        // pre-complete waste details repackaging info on BSD suite
        update: {
          wasteDetailsQuantity: tmpStorerAcceptedInfo.quantityReceived,
          wasteDetailsQuantityType: quantityType,
          wasteDetailsOnuCode: form.wasteDetailsOnuCode,
          wasteDetailsPackagingInfos: form.wasteDetailsPackagingInfos
        }
      }
    };

    const tempStoredForm = await runInTransaction(async transaction => {
      const formRepository = getFormRepository(user, transaction);
      const tempStoredForm = await formRepository.update(
        { id: form.id },
        {
          status: transitionForm(form, {
            type: EventType.MarkAsTempStorerAccepted,
            formUpdateInput
          }),
          ...formUpdateInput
        }
      );

      if (
        tempStorerAcceptedInfo.wasteAcceptationStatus ===
        WasteAcceptationStatus.REFUSED
      ) {
        await formRepository.removeAppendix2(id);
      }

      return tempStoredForm;
    });

    if (
      tempStoredForm.wasteAcceptationStatus ===
        WasteAcceptationStatus.REFUSED ||
      tempStoredForm.wasteAcceptationStatus ===
        WasteAcceptationStatus.PARTIALLY_REFUSED
    ) {
      const refusedEmail = await renderFormRefusedEmail(tempStoredForm);
      sendMail(refusedEmail);
    }

    return expandFormFromDb(tempStoredForm);
  };

export default markAsTempStorerAcceptedResolver;
