import { gql } from "@apollo/client";

export const GET_STACK_COMPANIES =  gql`
  stack(id: $id) {
    companies {
      id
      name
      defaultImagePath
    }
  }
`