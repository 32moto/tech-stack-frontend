import { useQuery } from "@apollo/client"
import { GetCompanyParamsType, GetCompanyResponseType, GetCompanyStackResponseType, GetCompanyVarsType, GetCompanyStackVarsType } from "@/types/api/company";
import {GET_COMPANY, GET_COMPANY_STACKS} from "./query"
import { client } from "@/libs/apollo"

export const companyRepository = () => {
  const getCompany = ({ id }: GetCompanyParamsType) => {
    return client.query<GetCompanyResponseType, GetCompanyVarsType>({query: GET_COMPANY, variables : {id}})
  }
  // 企業の基本情報とstackを一括取得している為、現状使用なし
  const useGetCompanyStack = ({ id }: GetCompanyParamsType) => {
    return useQuery<GetCompanyStackResponseType, GetCompanyStackVarsType>(GET_COMPANY_STACKS, {variables : {id}})
  }
  return {
    getCompany,
    useGetCompanyStack
  }
}