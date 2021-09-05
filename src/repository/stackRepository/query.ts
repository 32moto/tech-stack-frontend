import { gql } from "@apollo/client";

export const GET_STACK_COMPANIES =  gql`
  query getStackCompany ($id: ID!) {
    stack(id: $id) {
      id
      name
      defaultImagePath
    }
  } 
`