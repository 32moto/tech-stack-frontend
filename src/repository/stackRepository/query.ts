import { gql } from "@apollo/client";


export const GET_STACK =  gql`
  query getStack ($id: ID!) {
    stack(id: $id) {
      id
      name
      defaultImagePath
    }
  }
`

export const GET_STACK_COMPANIES =  gql`
  query getStackCompany ($id: ID!) {
    stack(id: $id) {
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