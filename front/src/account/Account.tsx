import React from "react";
import gql from "graphql-tag";
import { filter } from "graphql-anywhere";
import { useQuery } from "@apollo/react-hooks";
import AccountMenu from "./AccountMenu";
import { Route, withRouter, RouteComponentProps } from "react-router";
import Loader from "../common/Loader";
import Error from "../common/Error";
import AccountInfo from "./AccountInfo";
import AccountIntegrationApi from "./AccountIntegrationApi";
import AccountContentWrapper from "./AccountContentWrapper";

const GET_ME = gql`
  {
    me {
      ...AccountMenuFragment
      ...AccountInfoFragment
    }
  }
  ${AccountMenu.fragments.me}
  ${AccountInfo.fragments.me}
`;

export default withRouter(function Account({ match }: RouteComponentProps) {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <Loader />;

  if (error) return <Error message={error.message} />;

  return (
    <div id="account" className="account dashboard">
      <AccountMenu
        me={filter(AccountMenu.fragments.me, data.me)}
        match={match}
      />
      <div className="dashboard-content">
        <Route
          path={`${match.path}/info`}
          render={() => (
            <AccountContentWrapper title="Informations générales">
              <AccountInfo me={filter(AccountInfo.fragments.me, data.me)} />
            </AccountContentWrapper>
          )}
        />
        <Route
          path={`${match.path}/integration`}
          render={() => (
            <AccountContentWrapper title="Intégration API">
              <AccountIntegrationApi />
            </AccountContentWrapper>
          )}
        />
      </div>
    </div>
  );
});
