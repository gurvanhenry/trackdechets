import React from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { InlineError } from "common/components/Error";
import styles from "./AccountForm.module.scss";

interface AccountFormAgreementsProps {
  name: string;
  ecoOrganismeAgreements: string[];
  siret: string;
  toggleEdition: () => void;
}

const UPDATE_AGREEMENTS = gql`
  mutation UpdateCompanyAgreements(
    $siret: String!
    $ecoOrganismeAgreements: [URL!]
  ) {
    updateCompany(
      siret: $siret
      ecoOrganismeAgreements: $ecoOrganismeAgreements
    ) {
      id
      siret
      ecoOrganismeAgreements
    }
  }
`;

export default function AccountFormAgreements({
  name,
  ecoOrganismeAgreements,
  siret,
  toggleEdition,
}: AccountFormAgreementsProps) {
  const [updateAgreements, { loading, error }] = useMutation<
    {},
    {
      siret: string;
      ecoOrganismeAgreements: string[];
    }
  >(UPDATE_AGREEMENTS);

  return (
    <Formik<{ ecoOrganismeAgreements: string[] }>
      initialValues={{ ecoOrganismeAgreements }}
      onSubmit={async values => {
        await updateAgreements({
          variables: {
            siret,
            ecoOrganismeAgreements:
              // Filter out empty inputs
              values.ecoOrganismeAgreements.filter(Boolean),
          },
        });
        toggleEdition();
      }}
    >
      {props => (
        <Form>
          <FieldArray name={name}>
            {({ push, remove }) => (
              <>
                <div className="form__group">
                  {props.values.ecoOrganismeAgreements.map((url, index) => (
                    <div
                      key={index}
                      className={styles.input__group}
                      style={{ alignItems: "normal", marginBottom: "10px" }}
                    >
                      <Field name={`${name}.${index}`} type="url" />

                      <button
                        type="button"
                        className="button-outline small warning"
                        onClick={() => remove(index)}
                        aria-label="Supprimer"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
                {error && <InlineError apolloError={error} />}
                <button
                  className="button-outline primary"
                  type="button"
                  disabled={loading}
                  onClick={() => push("")}
                >
                  Ajouter un agrément
                </button>
                &nbsp;
                <button className="button" type="submit" disabled={loading}>
                  {loading ? "Chargement..." : "Valider"}
                </button>
              </>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
}