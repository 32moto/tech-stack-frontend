import { useQuery } from "@apollo/client"
import { GetCompanyParamsType, GetCompanyResponseType, GetCompanyStackResponseType, GetCompanyVarsType, GetCompanyStackVarsType } from "@/types/api/company";
import {GET_COMPANY, GET_COMPANY_STACKS} from "./query"
import { client } from "@/libs/apollo"

export const companyRepository = () => {
  const useGetCompany = ({ id }: GetCompanyParamsType) => {
    return client.query<GetCompanyResponseType, GetCompanyVarsType>({query: GET_COMPANY, variables : {id}})
  }
  const useGetCompanyStack = ({ id }: GetCompanyParamsType) => {
    return useQuery<GetCompanyStackResponseType, GetCompanyStackVarsType>(GET_COMPANY_STACKS, {variables : {id}})
  }
  return {
    useGetCompany,
    useGetCompanyStack
  }
}