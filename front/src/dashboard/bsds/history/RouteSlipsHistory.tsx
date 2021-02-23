import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Blankslate,
  BlankslateImg,
  BlankslateTitle,
  BlankslateDescription,
} from "common/components";
import { Query, QueryFormsArgs } from "generated/graphql/types";
import { BSDList } from "../../components/BSDList";

import { HISTORY_TAB_FORMS } from "../queries";
import SlipsHeaderActions from "../SlipsHeaderActions";
import illustration from "./assets/blankslateHistory.svg";

export function RouteSlipsHistory() {
  const { siret } = useParams<{ siret: string }>();
  const { data, loading, fetchMore, refetch } = useQuery<
    Pick<Query, "forms">,
    Partial<QueryFormsArgs>
  >(HISTORY_TAB_FORMS, {
    variables: {
      siret,
    },
    notifyOnNetworkStatusChange: true,
  });
  const forms = data?.forms ?? [];

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Mes Bordereaux</BreadcrumbItem>
        <BreadcrumbItem>Archives</BreadcrumbItem>
      </Breadcrumb>

      <SlipsHeaderActions refetch={refetch} />

      {forms.length > 0 || loading ? (
        <BSDList
          loading={loading}
          siret={siret}
          forms={forms}
          fetchMore={fetchMore}
        />
      ) : (
        <Blankslate>
          <BlankslateImg src={illustration} alt="" />
          <BlankslateTitle>Il n'y a aucun bordereau en archive</BlankslateTitle>
          <BlankslateDescription>
            Des bordereaux apparaissent dans cet onnglet lorsqu'ils terminé leur
            cycle de vie. Ils sont alors disponible en lecture seule pour
            consultation.
          </BlankslateDescription>
        </Blankslate>
      )}
    </>
  );
}
