import { gql } from "@apollo/client";

export const GET_USER =  gql`
  query getUser($id: String!) {
    user(id: $id) {
      id
      name
      iconPath
    }
  }
`

export const GET_USER_STACKS =  gql`
  query getUserStacks($id: String!) {
    user(id: $id) {
      stacks
    }
  }
`