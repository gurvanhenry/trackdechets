import { gql } from "apollo-server-core";

export const INCOMING_WASTES = gql`
  query IncomingWastes(
    $sirets: [String!]!
    $where: WasteRegisterWhere
    $first: Int
    $after: ID
    $last: Int
    $before: ID
  ) {
    incomingWastes(
      sirets: $sirets
      where: $where
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
        }
      }
    }
  }
`;

export const OUTGOING_WASTES = gql`
  query OutgoingWastes(
    $sirets: [String!]!
    $where: WasteRegisterWhere
    $first: Int
    $after: ID
    $last: Int
    $before: ID
  ) {
    outgoingWastes(
      sirets: $sirets
      where: $where
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
        }
      }
    }
  }
`;

export const TRANSPORTED_WASTES = gql`
  query TransportedWastes(
    $sirets: [String!]!
    $where: WasteRegisterWhere
    $first: Int
    $after: ID
    $last: Int
    $before: ID
  ) {
    transportedWastes(
      sirets: $sirets
      where: $where
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
        }
      }
    }
  }
`;

export const MANAGED_WASTES = gql`
  query ManagedWastes(
    $sirets: [String!]!
    $where: WasteRegisterWhere
    $first: Int
    $after: ID
    $last: Int
    $before: ID
  ) {
    managedWastes(
      sirets: $sirets
      where: $where
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
        }
      }
    }
  }
`;

export const ALL_WASTES = gql`
  query AllWastes(
    $sirets: [String!]!
    $where: WasteRegisterWhere
    $first: Int
    $after: ID
    $last: Int
    $before: ID
  ) {
    allWastes(
      sirets: $sirets
      where: $where
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
        }
      }
    }
  }
`;

export const WASTES_CSV = gql`
  query WastesCsv(
    $registerType: WasteRegisterType!
    $sirets: [String!]!
    $fileType: WasteRegisterFileType!
    $where: WasteRegisterWhere
  ) {
    wastesCsv(registerType: $registerType, sirets: $sirets, where: $where) {
      token
      downloadLink
    }
  }
`;

export const WASTES_XLS = gql`
  query WastesXls(
    $registerType: WasteRegisterType!
    $sirets: [String!]!
    $where: WasteRegisterWhere
  ) {
    wastesXls(registerType: $registerType, sirets: $sirets, where: $where) {
      token
      downloadLink
    }
  }
`;
