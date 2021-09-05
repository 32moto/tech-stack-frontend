import { gql } from "@apollo/client";


export const GET_STACK =  gql`
  query getStack ($id: ID!) {
    getStack(id: $id) {
      id
      name
      imagePath
    }
  }
`

export const GET_STACK_COMPANIES =  gql`
  query getStackCompany ($id: ID!) {
    getStack(id: $id) {
      companies {
        id
        name
        imagePath
      }
    }
  }
`

export const GET_STACK_USERS =  gql`
  query getStackUsers($id: ID!) {
    getStack(id: $id) {
      users {
        id
        name
        imagePath
      }
    }
  }
`