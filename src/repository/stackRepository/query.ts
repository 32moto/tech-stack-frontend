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

export const GET_STACK_USERS =  gql`
  stack(id: $id) {
    users {
      id
      name
      iconPath
    }
  }
`