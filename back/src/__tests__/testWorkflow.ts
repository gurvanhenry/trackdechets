import prisma from "../prisma";
import { userWithCompanyFactory, ecoOrganismeFactory } from "./factories";
import makeClient from "./testClient";

async function testWorkflow(workflow) {
  // init a context that can be passed from one step to the other
  let context = {};

  // create the different companies used in this workflow
  for (const workflowCompany of workflow.companies) {
    if (workflowCompany.companyTypes.includes("ECO_ORGANISME")) {
      // create ecoOrganisme to allow its user to perform api calls
      const count = await prisma.company.count();
      await ecoOrganismeFactory({ count, handleBsdasri: true });
    }
    const { user, company } = await userWithCompanyFactory("MEMBER", {
      companyTypes: workflowCompany.companyTypes,
      ...(workflowCompany?.opt || {})
    });

    context = { ...context, [workflowCompany.name]: { ...company, user } };
  }

  // run the steps one by one
  for (const step of workflow.steps) {
    const { mutate } = makeClient(context[step.company].user);

    const { errors, data: response } = await mutate(step.mutation, {
      variables: step.variables(context)
    });
    expect(errors).toBeUndefined();

    const data = step.data(response);
    expect(data).toEqual(expect.objectContaining(step.expected));

    if (step.setContext) {
      context = step.setContext(context, data);
    }
  }
}

export default testWorkflow;
