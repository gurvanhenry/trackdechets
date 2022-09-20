import React from "react";
import { useMutation, gql } from "@apollo/client";
import { Formik, Field, Form, FormikProps } from "formik";
import CompanyTypes from "../../../login/CompanyType";
import RedErrorMessage from "common/components/RedErrorMessage";
import styles from "./AccountForm.module.scss";
import { InlineError } from "common/components/Error";
import {
  CompanyType,
  Mutation,
  MutationUpdateCompanyArgs,
} from "generated/graphql/types";

type Props = {
  name: string;
  id: string;
  companyTypes: CompanyType[];
  toggleEdition: () => void;
};

type V = {
  companyTypes: CompanyType[];
};

export const UPDATE_COMPANY_TYPES = gql`
  mutation UpdateCompany($id: String!, $companyTypes: [CompanyType]) {
    updateCompany(id: $id, companyTypes: $companyTypes) {
      id
      companyTypes
    }
  }
`;

export default function AccountFormCompanyTypes({
  name,
  id,
  companyTypes,
  toggleEdition,
}: Props) {
  const [update, { loading, error }] = useMutation<
    Pick<Mutation, "updateCompany">,
    Pick<MutationUpdateCompanyArgs, "id" | "companyTypes">
  >(UPDATE_COMPANY_TYPES, {
    onCompleted: () => {
      toggleEdition();
    },
  });

  const initialValues = {} as V;
  initialValues["companyTypes"] = companyTypes;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setFieldError, setSubmitting }) => {
        update({ variables: { id, ...values } }).catch(() => {
          setFieldError(name, "Erreur serveur");
          setSubmitting(false);
        });
      }}
      validateOnChange={false}
    >
      {(props: FormikProps<V>) => (
        <Form>
          <div className="form__row">
            <Field
              className={styles.input}
              name={name}
              component={CompanyTypes}
            ></Field>
          </div>
          {loading && <div>Envoi en cours...</div>}

          {props.errors[name] && (
            <RedErrorMessage name={name}>{props.errors[name]}</RedErrorMessage>
          )}
          {error && <InlineError apolloError={error} />}

          <button
            className="btn btn--primary"
            type="submit"
            disabled={props.isSubmitting}
          >
            Valider
          </button>
        </Form>
      )}
    </Formik>
  );
}
