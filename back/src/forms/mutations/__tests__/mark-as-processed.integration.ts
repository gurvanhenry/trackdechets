import { createTestClient } from "apollo-server-integration-testing";
import { resetDatabase } from "../../../../integration-tests/helper";
import { prisma } from "../../../generated/prisma-client";
import { server } from "../../../server";
import {
  formFactory,
  userWithCompanyFactory
} from "../../../__tests__/factories";

jest.mock("axios", () => ({
  default: {
    get: jest.fn(() => Promise.resolve({ data: {} }))
  }
}));

describe("Integration / Mark as processed mutation", () => {
  let user;
  let company;
  let mutate;

  beforeAll(async () => {
    const userAndCompany = await userWithCompanyFactory("ADMIN");
    user = userAndCompany.user;
    company = userAndCompany.company;
  });

  beforeEach(() => {
    // instantiate test client
    const { mutate: m, setOptions } = createTestClient({
      apolloServer: server
    });

    setOptions({
      request: {
        user
      }
    });

    mutate = m;
  });

  afterAll(async () => {
    await resetDatabase();
  });

  it("should mark a form as processed", async () => {
    const form = await formFactory({
      ownerId: user.id,
      opt: {
        status: "RECEIVED",
        recipientCompanyName: company.name,
        recipientCompanySiret: company.siret
      }
    });

    const mutation = `
      mutation   {
        markAsProcessed(id: "${form.id}", processedInfo: {
          processingOperationDescription: "Une description",
          processingOperationDone: "D 1",
          processedBy: "A simple bot",
          processedAt: "2018-12-11T00:00:00.000Z"
        }) {
          id
        }
      }
    `;

    await mutate(mutation);

    const resultingForm = await prisma.form({ id: form.id });
    expect(resultingForm.status).toBe("PROCESSED");
  });

  it("should mark a form as AWAITING_GROUP when operation implies so", async () => {
    const form = await formFactory({
      ownerId: user.id,
      opt: {
        status: "RECEIVED",
        recipientCompanyName: company.name,
        recipientCompanySiret: company.siret
      }
    });

    const mutation = `
      mutation   {
        markAsProcessed(id: "${form.id}", processedInfo: {
          processingOperationDescription: "Une description",
          processingOperationDone: "D 14",
          processedBy: "A simple bot",
          processedAt: "2018-12-11T00:00:00.000Z"
          nextDestination: {
            processingOperation: "D 1"
            company: {
              mail: "m@m.fr"
              siret: "97874512984578"
              name: "company"
              phone: "0101010101"
              contact: "The famous bot"
              address: "A beautiful place..."
            }
          }
        }) {
          id
        }
      }
    `;

    await mutate(mutation);

    const resultingForm = await prisma.form({ id: form.id });
    expect(resultingForm.status).toBe("AWAITING_GROUP");
  });

  it("should mark a form as NO_TRACEABILITY when user declares it", async () => {
    const form = await formFactory({
      ownerId: user.id,
      opt: {
        status: "RECEIVED",
        recipientCompanyName: company.name,
        recipientCompanySiret: company.siret
      }
    });

    const mutation = `
      mutation   {
        markAsProcessed(id: "${form.id}", processedInfo: {
          processingOperationDescription: "Une description",
          processingOperationDone: "D 1",
          processedBy: "A simple bot",
          processedAt: "2018-12-11T00:00:00.000Z"
          noTraceability: true
        }) {
          id
        }
      }
    `;

    await mutate(mutation);

    const resultingForm = await prisma.form({ id: form.id });
    expect(resultingForm.status).toBe("NO_TRACEABILITY");
  });
});