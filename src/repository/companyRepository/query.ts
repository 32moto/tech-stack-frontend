import { gql } from "@apollo/client";

export const GET_COMPANY = gql `
  query getCompany($id: ID!) {
    company(id: $id) {
      id
      name
      defaultImagePath
    }
  }
`


export const GET_COMPANY_STACK = gql `
  query getCompanyStack($id: ID!) {
    company(id: $id) {
      stacks {
        id
        name
        defaultImagePath
      }
    }
  }
`
