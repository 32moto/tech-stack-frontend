import { gql } from "@apollo/client";

export const GET_COMPANY = gql `
  query getCompany($id: ID!) {
    company(id: $id) {
      id
      name
      imagePath
      stacks {
        id
        name
        imagePath  
      }  
    }
  }
`

// 企業の基本情報とstackを一括取得している為、現状使用なし
export const GET_COMPANY_STACKS = gql `
  query getCompanyStacks($id: ID!) {
    company(id: $id) {
      stacks {
        id
        name
        imagePath
      }
    }
  }
`

export const GET_COMPANY_AND_USER = gql `
  query getCompanyAndUsers($id: ID!) {
    company(id: 1) {
      id
      name
      imagePath
      users {
        id
        name
        imagePath
      }
    }
  }
`
