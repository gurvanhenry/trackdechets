import { userFactory } from "../../../../__tests__/factories";
import makeClient from "../../../../__tests__/testClient";
import { resetDatabase } from "../../../../../integration-tests/helper";
import prisma from "../../../../prisma";
import { compare } from "bcrypt";
import { AuthType } from "../../../../auth";
import { Mutation } from "../../../../generated/graphql/types";

const CHANGE_PASSWORD = `
  mutation ChangePassword($oldPassword: String!, $newPassword: String!){
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword){
      id
    }
  }
`;

describe("mutation changePassword", () => {
  afterAll(resetDatabase);

  it("should update a user password", async () => {
    const user = await userFactory();
    const { mutate } = makeClient({ ...user, auth: AuthType.Session });
    const newPassword = "newPassword";
    const { data } = await mutate<Pick<Mutation, "changePassword">>(
      CHANGE_PASSWORD,
      {
        variables: { oldPassword: "pass", newPassword }
      }
    );
    expect(data.changePassword.id).toEqual(user.id);
    const updatedUser = await prisma.user.findUnique({
      where: { id: user.id }
    });
    expect(await compare(newPassword, updatedUser.password)).toEqual(true);
  });
});
