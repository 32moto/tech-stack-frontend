import { gql } from "@apollo/client";

export const GET_COMPANY = gql `
  query getCompany {
    company(id: $id) {
      id
      name
      defaultImagePath
      stacks {
        id
        name
        defaultImagePath
      }
    }
  }
`
