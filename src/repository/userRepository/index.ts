import { useQuery } from "@apollo/client"
import { 
  GetUserParamsType,
  GetUserResponseType,
  GetUserVarsType,
  GetUserStacksParamsType,
  GetUserStacksResponseType,
  GetUserStacksVarsType
} from '@/types/api/user/'
import { GET_USER, GET_USER_STACKS } from "./query"

export const userRepository = () => {
  const useGetUser = ({ id }: GetUserParamsType) => useQuery<GetUserResponseType, GetUserVarsType>(GET_USER, {variables : {id}})
  const useGetUserStacks = ({ id }: GetUserStacksParamsType) => useQuery<GetUserStacksResponseType, GetUserStacksVarsType>(GET_USER_STACKS, {variables : {id}})
  return {
    useGetUser,
    useGetUserStacks
  }
}