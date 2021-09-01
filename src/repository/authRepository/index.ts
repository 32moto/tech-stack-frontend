import { useQuery } from "@apollo/client"
import { GetCurrentUserResponseType } from "@/types/api/auth"
import { GET_CURRENT_USER } from "./query"

export const authRepository = () => {
  const useGetCurrentUser = () => useQuery<GetCurrentUserResponseType>(GET_CURRENT_USER)
  return {
    useGetCurrentUser
  }
}