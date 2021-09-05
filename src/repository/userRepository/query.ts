import { gql } from "@apollo/client";

export const GET_USER =  gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imagePath
    }
  }
`

export const GET_USER_STACKS =  gql`
  query getUserStacks($id: ID!) {
    getUser(id: $id) {
      stacks {
        id
        name
        imagePath
      }
    }
  }
`