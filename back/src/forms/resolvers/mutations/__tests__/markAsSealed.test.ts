import { ErrorCode } from "../../../../common/errors";
import { markAsSealedFn } from "../markAsSealed";
import { getNewValidPrismaForm, getContext } from "../__mocks__/data";

const temporaryStorageDetailMock = jest.fn(() => Promise.resolve(null));
const appendix2FormsMock = jest.fn(() => Promise.resolve([]));
const ecoOrganismeMock = jest.fn(() => Promise.resolve(null));
const formMock = jest.fn(() => Promise.resolve({}));
function mockFormWith(value) {
  const result: any = Promise.resolve(value);
  result.temporaryStorageDetail = temporaryStorageDetailMock;
  result.appendix2Forms = appendix2FormsMock;
  result.ecoOrganisme = ecoOrganismeMock;
  formMock.mockReturnValue(result);
}

const prisma = {
  form: formMock,
  updateForm: jest.fn((..._args) => Promise.resolve({})),
  createStatusLog: jest.fn(() => Promise.resolve({})),
  updateManyForms: jest.fn((..._args) => Promise.resolve({}))
};

jest.mock("../../../../generated/prisma-client", () => ({
  prisma: {
    form: () => prisma.form(),
    updateForm: (...args) => prisma.updateForm(...args),
    createStatusLog: () => prisma.createStatusLog(),
    updateManyForms: (...args) => prisma.updateManyForms(...args)
  }
}));

describe("Forms -> markAsSealed mutation", () => {
  const defaultContext = getContext();

  beforeEach(() => {
    formMock.mockReset();
    prisma.updateForm.mockClear();
    prisma.updateManyForms.mockClear();
  });

  it("should fail when form is not fully valid", async () => {
    expect.assertions(1);
    try {
      const form = getNewValidPrismaForm();
      // unvalidate form
      form.emitterCompanyAddress = null;

      mockFormWith(form);

      await markAsSealedFn(form, defaultContext);
    } catch (err) {
      expect(err.extensions.code).toBe(ErrorCode.BAD_USER_INPUT);
    }
  });

  it("should display the validation error when the form has an invalid field", async () => {
    expect.assertions(1);
    try {
      const form = getNewValidPrismaForm();
      // unvalidate form
      form.emitterCompanySiret = "";

      mockFormWith(form);

      await markAsSealedFn(form, defaultContext);
    } catch (err) {
      const errMess =
        `Erreur, impossible de sceller le bordereau car des champs obligatoires ne sont pas renseignés.\n` +
        `Erreur(s): Émetteur: Le siret de l'entreprise est obligatoire\n` +
        `Émetteur: Le SIRET doit faire 14 caractères numériques`;

      expect(err.message).toBe(errMess);
    }
  });

  it("should display all validation errors if there are many", async () => {
    try {
      const form = getNewValidPrismaForm();
      // unvalidate form
      form.emitterCompanySiret = "";
      form.emitterCompanyAddress = "";

      mockFormWith(form);

      await markAsSealedFn(form, defaultContext);
    } catch (err) {
      const errMess =
        `Erreur, impossible de sceller le bordereau car des champs obligatoires ne sont pas renseignés.\n` +
        `Erreur(s): Émetteur: Le siret de l'entreprise est obligatoire\n` +
        `Émetteur: Le SIRET doit faire 14 caractères numériques\n` +
        `Émetteur: L'adresse de l'entreprise est obligatoire`;
      expect(err.message).toBe(errMess);
    }
  });

  it("should fail when SEALED is not a possible next step", async () => {
    expect.assertions(1);
    try {
      const form = getNewValidPrismaForm();
      // unvalidate form
      form.status = "SENT";
      mockFormWith(form);

      await markAsSealedFn(form, defaultContext);
    } catch (err) {
      expect(err.extensions.code).toBe(ErrorCode.FORBIDDEN);
    }
  });

  it("should work when form is complete and has no appendix 2", async () => {
    expect.assertions(1);
    const form = getNewValidPrismaForm();

    appendix2FormsMock.mockResolvedValue([]);
    mockFormWith(form);

    await markAsSealedFn(form, defaultContext);
    expect(prisma.updateForm).toHaveBeenCalledTimes(1);
  });

  it("should work with appendix 2 and mark them as GROUPED", async () => {
    const form = getNewValidPrismaForm();

    appendix2FormsMock.mockResolvedValue([{ id: "appendix id" }]);
    mockFormWith(form);

    await markAsSealedFn(form, defaultContext);
    expect(prisma.updateForm).toHaveBeenCalledTimes(1);
    expect(prisma.updateManyForms).toHaveBeenCalledWith({
      where: {
        status: "AWAITING_GROUP",
        OR: [{ id: "appendix id" }]
      },
      data: { status: "GROUPED" }
    });
  });
});