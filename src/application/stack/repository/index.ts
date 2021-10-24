import { useQuery } from "@apollo/client"
import {
  GetStackParamsType,
  GetStackResponseType,
  GetStackVarsType,
  GetStackAndUsersParamsType,
  GetStackAndUsersResponseType,
  GetStackAndUsersVarsType,
  GetStackAndCompaniesParamsType,
  GetStackAndCompaniesResponseType,
  GetStackAndCompaniesVarsType,
  GetStacksResponseType
} from '@/types/api/stack'
import { GetStackCompaniesParamsType, GetStackCompaniesResponseType, GetStackCompaniesVarsType } from '@/types/api/stack/company'
import { GetStackUsersParamsType, GetStackUsersResponseType, GetStackUsersVarsType } from '@/types/api/stack/user'
import {
  GET_STACK,
  GET_STACK_COMPANIES,
  GET_STACK_USERS,
  GET_STACK_AND_USERS,
  GET_STACK_AND_COMPANIES,
  GET_STACKS
} from "./query"
import { client } from "@/libs/apollo"

export const stackRepository = () => {
  const useGetStack = ({ id }: GetStackParamsType) => useQuery<GetStackResponseType, GetStackVarsType>(GET_STACK, {variables : {id}})
  const useGetStackCompanies = ({ id }: GetStackCompaniesParamsType) => useQuery<GetStackCompaniesResponseType, GetStackCompaniesVarsType>(GET_STACK_COMPANIES, {variables : {id}})
  const useGetStackUsers = ({ id }: GetStackUsersParamsType) => useQuery<GetStackUsersResponseType, GetStackUsersVarsType>(GET_STACK_USERS, {variables : {id}})
  const getStacks = () => useQuery<GetStacksResponseType>(GET_STACKS)
  const getStackAndUsers = ({ id }: GetStackAndUsersParamsType) => client.query<GetStackAndUsersResponseType, GetStackAndUsersVarsType>({query: GET_STACK_AND_USERS, variables: {id}})
  const getStackAndCompanies = ({ id }: GetStackAndCompaniesParamsType) => client.query<GetStackAndCompaniesResponseType, GetStackAndCompaniesVarsType>({query: GET_STACK_AND_COMPANIES, variables: {id}})
  return {
    useGetStack,    
    useGetStackCompanies,
    useGetStackUsers,
    getStacks,
    getStackAndUsers,
    getStackAndCompanies
  }
}