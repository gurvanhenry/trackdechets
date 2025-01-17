import { gql } from "@apollo/client";
import { companyFragment } from "common/fragments";

const reviewFragment = gql`
  fragment FormRevisionRequestFragment on FormRevisionRequest {
    id
    form {
      id
      readableId
      wasteDetails {
        code
        name
        pop
        packagingInfos {
          type
          other
          quantity
        }
      }
      trader {
        company {
          ...CompanyFragment
        }
        receipt
        department
        validityLimit
      }
      broker {
        company {
          ...CompanyFragment
        }
        receipt
        department
        validityLimit
      }
      recipient {
        cap
      }
      quantityReceived
      processingOperationDone
      processingOperationDescription
      temporaryStorageDetail {
        destination {
          cap
          processingOperation
        }
      }
    }
    authoringCompany {
      siret
      name
    }
    approvals {
      approverSiret
      status
    }
    content {
      wasteDetails {
        code
        name
        pop
        packagingInfos {
          type
          other
          quantity
        }
      }
      trader {
        company {
          ...CompanyFragment
        }
        receipt
        department
        validityLimit
      }
      broker {
        company {
          ...CompanyFragment
        }
        receipt
        department
        validityLimit
      }
      recipient {
        cap
      }
      quantityReceived
      processingOperationDone
      processingOperationDescription
      temporaryStorageDetail {
        destination {
          cap
          processingOperation
        }
      }
    }
    status
    comment
  }
  ${companyFragment}
`;

export const GET_FORM_REVISION_REQUESTS = gql`
  query FormRevisionRequests($siret: String!, $after: String) {
    formRevisionRequests(siret: $siret, after: $after) {
      edges {
        node {
          ...FormRevisionRequestFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${reviewFragment}
`;

export const CREATE_FORM_REVISION_REQUEST = gql`
  mutation CreateFormRevisionRequest($input: CreateFormRevisionRequestInput!) {
    createFormRevisionRequest(input: $input) {
      id
    }
  }
`;

export const CANCEL_FORM_REVISION_REQUEST = gql`
  mutation CancelFormRevisionRequest($id: ID!) {
    cancelFormRevisionRequest(id: $id)
  }
`;

export const SUBMIT_FORM_REVISION_REQUEST_APPROVAL = gql`
  mutation SubmitFormRevisionRequestApproval($id: ID!, $isApproved: Boolean!) {
    submitFormRevisionRequestApproval(id: $id, isApproved: $isApproved) {
      id
      status
    }
  }
`;
