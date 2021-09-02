import { useMutation, useQuery } from "@apollo/client"
import {
  GetCurrentUserResponseType,
  MutateCurrentUserResponseType,
  MutateCurrentUserVarsType
} from "@/types/api/auth"
import { GET_CURRENT_USER, MUTATE_CURRENT_USER } from "./query"

export const authRepository = () => {
  const useGetCurrentUser = () => useQuery<GetCurrentUserResponseType>(GET_CURRENT_USER)
  const useMutateCurrentUser = () => useMutation<MutateCurrentUserResponseType, MutateCurrentUserVarsType | null>(MUTATE_CURRENT_USER)
  return {
    useGetCurrentUser,
    useMutateCurrentUser
  }
}