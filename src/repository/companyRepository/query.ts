import { gql } from "@apollo/client";

export const GET_COMPANY = gql `
  query getCompany($id: ID!) {
    company(id: $id) {
      id
      name
      imagePath
    }
  }
`

export const GET_COMPANY_STACK = gql `
  query getCompanyStack($id: ID!) {
    company(id: $id) {
      stacks {
        id
        name
        imagePath
      }
    }
  }
`
