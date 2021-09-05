import { useQuery } from "@apollo/client"
import { GetCompanyParamsType, GetCompanyResponseType, GetCompanyStackResponseType, GetCompanyVarsType, GetCompanyStackVarsType } from "@/types/api/company";
import {GET_COMPANY, GET_COMPANY_STACK} from "./query"

export const companyRepository = () => {
  const useGetCompany = ({ id }: GetCompanyParamsType) => {
    return useQuery<GetCompanyResponseType, GetCompanyVarsType>(GET_COMPANY, {variables : {id}})
  }
  const useGetCompanyStack = ({ id }: GetCompanyParamsType) => {
    return useQuery<GetCompanyStackResponseType, GetCompanyStackVarsType>(GET_COMPANY_STACK, {variables : {id}})
  }
  return {
    useGetCompany,
    useGetCompanyStack
  }
}