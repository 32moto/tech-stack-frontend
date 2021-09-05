import { useQuery } from "@apollo/client"
import { GetStackCompanyParamsType, GetStackCompanyResponseType, GetStackCompanyVarsType } from '@/types/api/stack/company'
import { GetStackUsersParamsType, GetStackUsersResponseType, GetStackUsersVarsType } from '@/types/api/stack/user'
import { GET_STACK_COMPANIES, GET_STACK_USERS } from "./query"

export const stackRepository = () => {
  const useGetStackCompanies = ({ id }: GetStackCompanyParamsType) => useQuery<GetStackCompanyResponseType, GetStackCompanyVarsType>(GET_STACK_COMPANIES, {variables : {id}})
  const useGetStackUsers = ({ id }: GetStackUsersParamsType) => useQuery<GetStackUsersResponseType, GetStackUsersVarsType>(GET_STACK_USERS, {variables : {id}})
  return {
    useGetStackCompanies,
    useGetStackUsers
  }
}