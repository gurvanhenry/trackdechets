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
            ? cogoToast.success(`Suppression définitive effectuée`, {
                hideAfter: 3,
              })
            : cogoToast.error(
                `Cet utilisateur ne peut pas être supprimé, soit il n'existe pas, soit il doit être lié à des bordereaux ou des établissements existants en base de données, tentez de supprimer les établissements s'ils sont orphelins et réessayer la suppression s'il vous plaît.`,
                { hideAfter: 3 }
              );
        }}
      >
        {() => (
          <Form>
            <div className="form__row">
              <label>
                ID de l'utilisateur à supprimer (
                <b class="tw-bg-orange-500">Attention: action irréversible !</b>
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
              {loading ? "Suppression..." : "Supprimer"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DeleteUser;
