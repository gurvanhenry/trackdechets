import { Status, UserRole, WasteAcceptationStatus } from "@prisma/client";
import {
  formFactory,
  formWithTempStorageFactory,
  userWithCompanyFactory
} from "../../../__tests__/factories";
import { renderFormRefusedEmail } from "../renderFormRefusedEmail";
import * as generateBsddPdf from "../../pdf/generateBsddPdf";
import { resetDatabase } from "../../../../integration-tests/helper";
import prisma from "../../../prisma";

jest.spyOn(generateBsddPdf, "generateBsddPdfToBase64").mockResolvedValue("");

describe("renderFormRefusedEmail", () => {
  afterAll(resetDatabase);

  test("when the form is refused by the recipient", async () => {
    const emitter = await userWithCompanyFactory(UserRole.ADMIN);
    const destination = await userWithCompanyFactory(UserRole.ADMIN);

    const form = await formFactory({
      ownerId: emitter.user.id,
      opt: {
        emitterCompanySiret: emitter.company.siret,
        emitterCompanyName: emitter.company.name,
        emitterCompanyAddress: emitter.company.address,
        recipientCompanySiret: destination.company.siret,
        recipientCompanyName: destination.company.name,
        recipientCompanyAddress: destination.company.address,
        sentAt: new Date("2022-01-01"),
        receivedAt: new Date("2022-01-02"),
        status: Status.REFUSED,
        wasteAcceptationStatus: WasteAcceptationStatus.REFUSED,
        wasteRefusalReason: "Parce que !!"
      }
    });
    const email = await renderFormRefusedEmail(form);
    expect(email.to).toEqual([
      { email: emitter.user.email, name: emitter.user.name }
    ]);
    expect(email.cc).toEqual([
      { email: destination.user.email, name: destination.user.name }
    ]);
    expect(email.body).toContain(`<p>
  Nous vous informons que la société ${destination.company.name} (${destination.company.siret}) a refusé le
  2 janvier 2022, le déchet de la
  société suivante :
</p>
<br />
<ul>
  <li>${emitter.company.name} (${emitter.company.siret}) - ${emitter.company.address}</li>
  <li>Informations relatives aux déchets refusés :</li>
  <ul>
    <li>Numéro du BSD: ${form.readableId}</li>
    <li>Appellation du déchet : ${form.wasteDetailsName}</li>
    <li>Code déchet : ${form.wasteDetailsCode}</li>
    <li>Motif de refus :
      <span>${form.wasteRefusalReason}</span>`);
  });

  test("when the form is refused by the recipient and dreal notification is activated", async () => {
    jest
      .spyOn(generateBsddPdf, "generateBsddPdfToBase64")
      .mockResolvedValue("");
    const { renderFormRefusedEmail } = require("../renderFormRefusedEmail");
    const emitter = await userWithCompanyFactory(UserRole.ADMIN);
    const destination = await userWithCompanyFactory(UserRole.ADMIN);

    const form = await formFactory({
      ownerId: emitter.user.id,
      opt: {
        emitterCompanySiret: emitter.company.siret,
        emitterCompanyName: emitter.company.name,
        emitterCompanyAddress: emitter.company.address,
        recipientCompanySiret: destination.company.siret,
        recipientCompanyName: destination.company.name,
        recipientCompanyAddress: destination.company.address,
        sentAt: new Date("2022-01-01"),
        receivedAt: new Date("2022-01-02"),
        status: Status.REFUSED,
        wasteAcceptationStatus: WasteAcceptationStatus.REFUSED,
        wasteRefusalReason: "Parce que !!"
      }
    });
    const email = await renderFormRefusedEmail(form, true);
    expect(email.cc).toEqual([
      { email: destination.user.email, name: destination.user.name },
      {
        email: "sric.ud92.drieat-if@developpement-durable.gouv.fr",
        name: "UD75 (Unité Départementale de Paris)"
      }
    ]);
  });

  test("when the form is partially refused by the recipient", async () => {
    const emitter = await userWithCompanyFactory(UserRole.ADMIN);
    const destination = await userWithCompanyFactory(UserRole.ADMIN);

    const form = await formFactory({
      ownerId: emitter.user.id,
      opt: {
        emitterCompanySiret: emitter.company.siret,
        emitterCompanyName: emitter.company.name,
        emitterCompanyAddress: emitter.company.address,
        recipientCompanySiret: destination.company.siret,
        recipientCompanyName: destination.company.name,
        recipientCompanyAddress: destination.company.address,
        sentAt: new Date("2022-01-01"),
        receivedAt: new Date("2022-01-02"),
        status: Status.ACCEPTED,
        wasteAcceptationStatus: WasteAcceptationStatus.PARTIALLY_REFUSED,
        quantityReceived: 1,
        wasteRefusalReason: "Parce que !!"
      }
    });
    const email = await renderFormRefusedEmail(form);
    expect(email.to).toEqual([
      { email: emitter.user.email, name: emitter.user.name }
    ]);
    expect(email.cc).toEqual([
      { email: destination.user.email, name: destination.user.name }
    ]);
    expect(email.body).toContain(`<p>
  Nous vous informons que la société ${form.recipientCompanyName} (${form.recipientCompanySiret}) a refusé
  partiellement le 2 janvier 2022, le
  déchet de la société suivante :
</p>
<br />
<ul>
  <li>${form.emitterCompanyName} (${form.emitterCompanySiret}) - ${form.emitterCompanyAddress}</li>
  <li>Informations relatives aux déchets refusés :</li>
  <ul>
    <li>Numéro du BSD : ${form.readableId}</li>
    <li>Appellation du déchet : ${form.wasteDetailsName}</li>
    <li>Code déchet : ${form.wasteDetailsCode}</li>
    <li>Quantité acceptée: ${form.quantityReceived} tonnes</li>
    <li>Motif de refus :
      <span>${form.wasteRefusalReason}</span>`);
  });

  test("when the form is refused by the temp storer", async () => {
    const emitter = await userWithCompanyFactory(UserRole.ADMIN);
    const ttr = await userWithCompanyFactory(UserRole.ADMIN);
    const destination = await userWithCompanyFactory(UserRole.ADMIN);

    const form = await formWithTempStorageFactory({
      ownerId: emitter.user.id,
      opt: {
        emitterCompanySiret: emitter.company.siret,
        emitterCompanyName: emitter.company.name,
        emitterCompanyAddress: emitter.company.address,
        recipientCompanySiret: ttr.company.siret,
        recipientCompanyName: ttr.company.name,
        recipientCompanyAddress: ttr.company.address,
        sentAt: new Date("2022-01-01"),
        receivedAt: new Date("2022-01-02"),
        status: Status.REFUSED,
        wasteAcceptationStatus: WasteAcceptationStatus.REFUSED,
        wasteRefusalReason: "Parce que !!"
      },
      forwardedInOpts: {
        sentAt: null,
        emitterCompanySiret: ttr.company.siret,
        emitterCompanyName: ttr.company.name,
        emitterCompanyAddress: ttr.company.address,
        recipientCompanySiret: destination.company.siret,
        recipientCompanyName: destination.company.name,
        recipientCompanyAddress: destination.company.address
      }
    });
    const email = await renderFormRefusedEmail(form);
    expect(email.to).toEqual([
      { email: emitter.user.email, name: emitter.user.name }
    ]);
    expect(email.cc).toEqual([{ email: ttr.user.email, name: ttr.user.name }]);
    expect(email.body).toContain(`<p>
  Nous vous informons que la société ${ttr.company.name} (${ttr.company.siret}) a refusé le
  2 janvier 2022, le déchet de la
  société suivante :
</p>
<br />
<ul>
  <li>${emitter.company.name} (${emitter.company.siret}) - ${emitter.company.address}</li>
  <li>Informations relatives aux déchets refusés :</li>
  <ul>
    <li>Numéro du BSD: ${form.readableId}</li>
    <li>Appellation du déchet : ${form.wasteDetailsName}</li>
    <li>Code déchet : ${form.wasteDetailsCode}</li>
    <li>Motif de refus :
      <span>${form.wasteRefusalReason}</span>`);
  });

  test("when the form is refused by the final destination after temp storage", async () => {
    const emitter = await userWithCompanyFactory(UserRole.ADMIN);
    const ttr = await userWithCompanyFactory(UserRole.ADMIN);
    const destination = await userWithCompanyFactory(UserRole.ADMIN);

    const form = await formWithTempStorageFactory({
      ownerId: emitter.user.id,
      opt: {
        emitterCompanySiret: emitter.company.siret,
        emitterCompanyName: emitter.company.name,
        emitterCompanyAddress: emitter.company.address,
        recipientCompanySiret: ttr.company.siret,
        recipientCompanyName: ttr.company.name,
        recipientCompanyAddress: ttr.company.address,
        sentAt: new Date("2022-01-01"),
        receivedAt: new Date("2022-01-02"),
        status: Status.ACCEPTED,
        wasteAcceptationStatus: WasteAcceptationStatus.ACCEPTED
      },
      forwardedInOpts: {
        emitterCompanySiret: ttr.company.siret,
        emitterCompanyName: ttr.company.name,
        emitterCompanyAddress: ttr.company.address,
        recipientCompanySiret: destination.company.siret,
        recipientCompanyName: destination.company.name,
        recipientCompanyAddress: destination.company.address,
        sentAt: new Date("2022-01-01"),
        receivedAt: new Date("2022-01-02"),
        status: Status.REFUSED,
        wasteAcceptationStatus: WasteAcceptationStatus.REFUSED,
        wasteRefusalReason: "Parce que !!"
      }
    });
    const forwardedIn = await prisma.form
      .findUnique({ where: { id: form.id } })
      .forwardedIn();
    const email = await renderFormRefusedEmail(form);

    expect(email.to).toEqual([
      { email: emitter.user.email, name: emitter.user.name }
    ]);
    expect(email.cc).toEqual([
      { email: destination.user.email, name: destination.user.name },
      { email: ttr.user.email, name: ttr.user.name }
    ]);
    expect(email.body).toContain(`<p>
  Nous vous informons que la société ${destination.company.name} (${destination.company.siret}) a refusé le
  2 janvier 2022, le déchet de la
  société suivante :
</p>
<br />
<ul>
  <li>${emitter.company.name} (${emitter.company.siret}) - ${emitter.company.address}</li>
  <li>Informations relatives aux déchets refusés :</li>
  <ul>
    <li>Numéro du BSD: ${form.readableId}</li>
    <li>Appellation du déchet : ${form.wasteDetailsName}</li>
    <li>Code déchet : ${form.wasteDetailsCode}</li>
    <li>Motif de refus :
      <span>${forwardedIn.wasteRefusalReason}</span>`);
  });
});
