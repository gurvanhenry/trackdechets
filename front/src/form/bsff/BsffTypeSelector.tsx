import * as React from "react";
import { useQuery } from "@apollo/client";
import { FieldArray, useField } from "formik";
import {
  Bsff,
  BsffFicheIntervention,
  BsffOperationCode,
  BsffPackaging,
  BsffStatus,
  BsffType,
  Query,
  QueryBsffsArgs,
} from "generated/graphql/types";
import {
  Loader,
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "common/components";
import { GET_BSFF_FORMS } from "./utils/queries";
import { OPERATION } from "./utils/constants";

const options = [
  {
    value: BsffType.TracerFluide,
    label: "Tracer un fluide",
  },
  {
    value: BsffType.CollectePetitesQuantites,
    label: "Collecte de petites quantités",
  },
  {
    value: BsffType.Groupement,
    label: "Groupement de plusieurs BSFFs",
    Component: () => (
      <div style={{ padding: "1rem 0" }}>
        <p style={{ marginBottom: "0.25rem" }}>
          Retrouvez ci-dessous la liste des BSFFs qui sont en attente d'un
          groupement.
        </p>
        <PreviousBsffsPicker
          code_in={Object.values(OPERATION)
            .filter(operation =>
              operation.successors.includes(BsffType.Groupement)
            )
            .map(operation => operation.code)}
        />
      </div>
    ),
  },
  {
    value: BsffType.Reconditionnement,
    label: "Reconditionnement de plusieurs BSFFs",
    Component: () => (
      <div style={{ padding: "1rem 0" }}>
        <p style={{ marginBottom: "0.25rem" }}>
          Retrouvez ci-dessous la liste des BSFFs qui sont en attente d'un
          reconditionnement.
        </p>
        <PreviousBsffsPicker
          code_in={Object.values(OPERATION)
            .filter(operation =>
              operation.successors.includes(BsffType.Reconditionnement)
            )
            .map(operation => operation.code)}
        />
      </div>
    ),
  },
];

interface PreviousBsffsPickerProps {
  code_in: BsffOperationCode[];
}

function PreviousBsffsPicker({ code_in }: PreviousBsffsPickerProps) {
  const { data } = useQuery<Pick<Query, "bsffs">, QueryBsffsArgs>(
    GET_BSFF_FORMS,
    {
      variables: {
        where: {
          status: BsffStatus.IntermediatelyProcessed,
          destination: {
            operation: {
              code_in,
            },
          },
        },
      },
    }
  );
  const [{ value: previousBsffs }] = useField<Bsff[]>("previousBsffs");

  if (data == null) {
    return <Loader />;
  }

  return (
    <FieldArray
      name="previousBsffs"
      render={({ push, remove }) => (
        <Table isSelectable>
          <TableHead>
            <TableRow>
              <TableHeaderCell />
              <TableHeaderCell>Numéro</TableHeaderCell>
              <TableHeaderCell>Déchet</TableHeaderCell>
              <TableHeaderCell>Émetteur</TableHeaderCell>
              <TableHeaderCell>Transporteur</TableHeaderCell>
              <TableHeaderCell>Destinataire</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.bsffs.edges.map(({ node: bsff }) => {
              const previousBsffIndex = previousBsffs.findIndex(
                previousBsff => previousBsff.id === bsff.id
              );
              const isSelected = previousBsffIndex >= 0;

              return (
                <TableRow
                  key={bsff.id}
                  onClick={() =>
                    isSelected ? remove(previousBsffIndex) : push(bsff)
                  }
                >
                  <TableCell>
                    <input
                      type="checkbox"
                      className="td-input"
                      checked={isSelected}
                      readOnly
                    />
                  </TableCell>
                  <TableCell>{bsff.id}</TableCell>
                  <TableCell>
                    {bsff.waste?.code} - Nature :{" "}
                    {bsff.waste?.nature ?? "inconnue"}
                  </TableCell>
                  <TableCell>{bsff.emitter?.company?.name}</TableCell>
                  <TableCell>{bsff.transporter?.company?.name}</TableCell>
                  <TableCell>{bsff.destination?.company?.name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    />
  );
}

export function BsffTypeSelector() {
  const [{ value: type }, , { setValue: setType }] = useField<BsffType>("type");
  const [{ value: previousBsffs }, , { setValue: setPreviousBsffs }] = useField<
    Bsff[]
  >("previousBsffs");
  const [{ value: packagings }, , { setValue: setPackagings }] = useField<
    BsffPackaging[]
  >("packagings");
  const [
    { value: ficheInterventions },
    ,
    { setValue: setFicheInterventions },
  ] = useField<BsffFicheIntervention[]>("ficheInterventions");

  return (
    <>
      <h4 className="form__section-heading">Type de BSFF</h4>

      <div className="form__row">
        <p>J'édite un BSFF pour :</p>
      </div>

      <div className="form__row">
        {options.map(option => (
          <React.Fragment key={option.value}>
            <label>
              <input
                type="radio"
                className="td-radio"
                name="type"
                value={option.value}
                checked={type === option.value}
                onChange={() => {
                  if (
                    [
                      BsffType.TracerFluide,
                      BsffType.CollectePetitesQuantites,
                    ].includes(option.value)
                  ) {
                    const errors = [
                      ...(previousBsffs.length > 0
                        ? [
                            `Ce BSFF fait actuellement référence à ${previousBsffs.length} précédents BSFFs. Hors le nouveau type de BSFF que vous avez choisit ne permet pas de grouper ou de reconditionner d'autres BSFFs.`,
                            `Pour continuer, ces BSFFs vont être dissociés.`,
                          ]
                        : []),
                    ];
                    if (
                      errors.length > 0 &&
                      !window.confirm(
                        [...errors, `Souhaitez-vous continuer ?`].join("\n\n")
                      )
                    ) {
                      return;
                    }

                    setPreviousBsffs([]);
                    setType(option.value);
                    return;
                  }

                  if (option.value === BsffType.Groupement) {
                    const errors = [
                      ...(previousBsffs.length > 0
                        ? [
                            `Ce BSFF fait actuellement référénce à ${previousBsffs.length} précédents BSFFs. Hors certains d'entre eux peuvent avoir déclaré un traitement incompatible avec le groupement.`,
                            `Pour continuer, ces BSFFs vont être dissociés.`,
                          ]
                        : []),
                      ...(packagings.length > 0
                        ? [
                            `Ce BSFF liste actuellement ${packagings.length} contenants. Hors le groupement ne permet pas de changer les contenants des BSFFs groupés.`,
                            `Pour continuer, les contenants actuels vont être retirés.`,
                          ]
                        : []),
                      ...(ficheInterventions.length > 0
                        ? [
                            `Ce BSFF liste actuellement ${ficheInterventions.length} fiches d'intervention. Hors le groupement ne fait pas suite à une intervention.`,
                            `Pour continuer, les fiches d'intervention vont être dissociées.`,
                          ]
                        : []),
                    ];
                    if (
                      errors.length > 0 &&
                      !window.confirm(
                        [...errors, `Souhaitez-vous continuer ?`].join("\n\n")
                      )
                    ) {
                      return;
                    }

                    setPreviousBsffs([]);
                    setPackagings([]);
                    setFicheInterventions([]);
                    setType(option.value);
                    return;
                  }

                  if (option.value === BsffType.Reconditionnement) {
                    const errors = [
                      ...(previousBsffs.length > 0
                        ? [
                            `Ce BSFF fait actuellement référénce à ${previousBsffs.length} précédents BSFFs. Hors certains d'entre eux peuvent avoir déclaré un traitement incompatible avec le groupement.`,
                            `Pour continuer, ces BSFFs vont être dissociés.`,
                          ]
                        : []),
                      ...(ficheInterventions.length > 0
                        ? [
                            `Ce BSFF liste actuellement ${ficheInterventions.length} fiches d'intervention. Hors le groupement ne fait pas suite à une intervention.`,
                            `Pour continuer, les fiches d'intervention vont être dissociées.`,
                          ]
                        : []),
                    ];
                    if (
                      errors.length > 0 &&
                      !window.confirm(
                        [...errors, `Souhaitez-vous continuer ?`].join("\n\n")
                      )
                    ) {
                      return;
                    }

                    setPreviousBsffs([]);
                    setFicheInterventions([]);
                    setType(option.value);
                    return;
                  }

                  throw new Error(
                    `The logic for the bsff type ${option.value} is not implemented`
                  );
                }}
              />{" "}
              {option.label}
            </label>
            {type === option.value && option.Component && <option.Component />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
