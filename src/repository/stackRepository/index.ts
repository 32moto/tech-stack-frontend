import { useQuery } from "@apollo/client"
import { GetStackCompanyResponseType, GetStackCompanyVarsType } from '@/types/api/stack/company'
import { GetStackCompanyParamsType } from '@/types/stack/company'
import { GET_STACK_COMPANIES } from "./query"

export const stackRepository = () => {
  const useGetStackCompanies = ({ id }: GetStackCompanyParamsType) => useQuery<GetStackCompanyResponseType, GetStackCompanyVarsType>(GET_STACK_COMPANIES, {variables : {id}})
  return {
    useGetStackCompanies
  }
}