import { UserRole } from ".prisma/client";
import getReadableId, { ReadableIdPrefix } from "../../../../forms/readableId";
import {
  createBsffFicheInterventionInputMock,
  Mutation,
  MutationDeleteFicheInterventionBsffArgs
} from "../../../../generated/graphql/types";
import prisma from "../../../../prisma";
import { userWithCompanyFactory } from "../../../../__tests__/factories";
import makeClient from "../../../../__tests__/testClient";
import {
  flattenFicheInterventionBsffInput,
  getFicheInterventionId
} from "../../../converter";
import { createBsff } from "../../../__tests__/factories";

const DELETE_FICHE_INTERVENTION = `
  mutation DeleteFicheIntervention($id: ID!, $numero: String!) {
    deleteFicheInterventionBsff(id: $id, numero: $numero) {
      numero
    }
  }
`;

describe("Mutation.deleteFicheInterventionBsff", () => {
  it("should allow user to delete a fiche d'intervention", async () => {
    const emitter = await userWithCompanyFactory(UserRole.ADMIN);

    const bsffId = getReadableId(ReadableIdPrefix.FF);
    const ficheInterventionNumero = "ABCDEFGHIJK";
    const ficheInterventionId = getFicheInterventionId(
      bsffId,
      ficheInterventionNumero
    );
    await createBsff(
      { emitter },
      {
        id: bsffId,
        ficheInterventions: {
          create: {
            id: ficheInterventionId,
            numero: ficheInterventionNumero,
            ...flattenFicheInterventionBsffInput(
              createBsffFicheInterventionInputMock({})
            )
          }
        }
      }
    );

    const { mutate } = makeClient(emitter.user);
    const { data } = await mutate<
      Pick<Mutation, "deleteFicheInterventionBsff">,
      MutationDeleteFicheInterventionBsffArgs
    >(DELETE_FICHE_INTERVENTION, {
      variables: {
        id: bsffId,
        numero: ficheInterventionNumero
      }
    });

    expect(data.deleteFicheInterventionBsff.numero).toBeTruthy();
  });

  it("should disallow unauthenticated user to delete a fiche d'intervention", async () => {
    const { mutate } = makeClient();
    const { errors } = await mutate<
      Pick<Mutation, "deleteFicheInterventionBsff">,
      MutationDeleteFicheInterventionBsffArgs
    >(DELETE_FICHE_INTERVENTION, {
      variables: {
        id: "123",
        numero: "456"
      }
    });

    expect(errors).toEqual([
      expect.objectContaining({
        extensions: {
          code: "UNAUTHENTICATED"
        }
      })
    ]);
  });

  it("should disallow user to delete a fiche d'intervention on a bsff they are not part of", async () => {
    const { user } = await userWithCompanyFactory(UserRole.ADMIN);

    const bsffId = getReadableId(ReadableIdPrefix.FF);
    const ficheInterventionNumero = "ABCDEFGHIJK";
    const ficheInterventionId = getFicheInterventionId(
      bsffId,
      ficheInterventionNumero
    );
    await createBsff(
      {},
      {
        id: bsffId,
        ficheInterventions: {
          create: {
            id: ficheInterventionId,
            numero: ficheInterventionNumero,
            ...flattenFicheInterventionBsffInput(
              createBsffFicheInterventionInputMock({})
            )
          }
        }
      }
    );

    const { mutate } = makeClient(user);
    const { errors } = await mutate<
      Pick<Mutation, "deleteFicheInterventionBsff">,
      MutationDeleteFicheInterventionBsffArgs
    >(DELETE_FICHE_INTERVENTION, {
      variables: {
        id: bsffId,
        numero: ficheInterventionNumero
      }
    });

    expect(errors).toEqual([
      expect.objectContaining({
        message:
          "Vous ne pouvez pas éditer un bordereau sur lequel le SIRET de votre entreprise n'apparaît pas."
      })
    ]);
  });

  it("should throw an error if the bsff doesn't exist", async () => {
    const { user } = await userWithCompanyFactory(UserRole.ADMIN);

    const bsffId = getReadableId(ReadableIdPrefix.FF);
    const ficheInterventionNumero = "ABCDEFGHIJK";
    const ficheInterventionId = getFicheInterventionId(
      bsffId,
      ficheInterventionNumero
    );
    await prisma.bsffFicheIntervention.create({
      data: {
        id: ficheInterventionId,
        numero: ficheInterventionNumero,
        ...flattenFicheInterventionBsffInput(
          createBsffFicheInterventionInputMock({})
        )
      }
    });

    const { mutate } = makeClient(user);
    const { errors } = await mutate<
      Pick<Mutation, "deleteFicheInterventionBsff">,
      MutationDeleteFicheInterventionBsffArgs
    >(DELETE_FICHE_INTERVENTION, {
      variables: {
        id: bsffId,
        numero: ficheInterventionNumero
      }
    });

    expect(errors).toEqual([
      expect.objectContaining({
        message: `Le bordereau de fluides frigorigènes n°${bsffId} n'existe pas.`
      })
    ]);
  });

  it("should throw an error if the fiche d'intervention doesn't exist", async () => {
    const emitter = await userWithCompanyFactory(UserRole.ADMIN);

    const bsffId = getReadableId(ReadableIdPrefix.FF);
    const ficheInterventionNumero = "ABCDEFGHIJK";
    await createBsff({ emitter }, { id: bsffId });

    const { mutate } = makeClient(emitter.user);
    const { errors } = await mutate<
      Pick<Mutation, "deleteFicheInterventionBsff">,
      MutationDeleteFicheInterventionBsffArgs
    >(DELETE_FICHE_INTERVENTION, {
      variables: {
        id: bsffId,
        numero: ficheInterventionNumero
      }
    });

    expect(errors).toEqual([
      expect.objectContaining({
        message: `La fiche d'intervention n°${ficheInterventionNumero} n'existe pas pour le bordereau n°${bsffId}.`
      })
    ]);
  });

  it.todo(
    "should disallow deleting a fiche d'intervention from a bsff with a signature"
  );
});
