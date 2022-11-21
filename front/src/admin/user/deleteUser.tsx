import * as React from "react";
import { Formik, Form, Field } from "formik";
import cogoToast from "cogo-toast";
import { gql, useMutation } from "@apollo/client";
import { Mutation, MutationDeleteUserArgs } from "generated/graphql/types";
import { InlineError } from "common/components/Error";
import RedErrorMessage from "common/components/RedErrorMessage";

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
function DeleteUser() {
  const [deleteUser, { loading, error }] =
    useMutation<Pick<Mutation, "deleteUser">, MutationDeleteUserArgs>(
      DELETE_USER
    );

  return (
    <div className="tw-mx-2">
      <Formik
        initialValues={{
          id: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          const res = await deleteUser({ variables: { id: values.id } });
          resetForm();
          !!res?.data?.deleteUser
            ? cogoToast.success(
                `Suppression effectuée, notez l'email anonymisé si besoin immédiatement car il sera impossible de le récupérer : ${res?.data?.deleteUser}\nNe divulguez cet email à personne !`,
                {
                  hideAfter: 60,
                }
              )
            : cogoToast.error(
                `Cet utilisateur ne peut pas être supprimé, soit il n'existe pas, soit il doit être lié à des application ou des établissements existants en base de données, tentez de les supprimer si possible et réessayer de supprimer s'il vous plaît.`,
                { hideAfter: 3 }
              );
        }}
      >
        {() => (
          <Form>
            <div className="form__row">
              <label>
                Identifiant (de base de données) du compte à anonymiser et
                désactiver définitivement (
                <b className="tw-bg-orange-500">
                  Attention: action irreversible ! L'utilisateur sera anonymisé
                  et son compte définitivement désactivé.
                </b>
                )
                <Field
                  name="id"
                  placeholder="qsdfg12345azerty"
                  className="td-input"
                />
              </label>
              <RedErrorMessage name="id" />
            </div>
            {error && <InlineError apolloError={error} />}
            <button
              type="submit"
              className="btn btn--primary tw-mt-1"
              disabled={loading}
            >
              {loading
                ? "Désactivation en cours..."
                : "Désactiver et anonymiser"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DeleteUser;
