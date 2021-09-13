import { useMutation, useQuery } from "@apollo/client"
import {
  GetCurrentUserResponseType,
  SetCurrentUserResponseType,
  SetCurrentUserVarsType
} from "@/types/api/auth"
import { firebaseLogin,  firebaseLogout } from "@/libs/firebase/auth"
// import { GET_CURRENT_USER, SET_CURRENT_USER } from "./query"

export const authRepository = () => {
  // const useGetCurrentUser = () => useQuery<GetCurrentUserResponseType | null>(GET_CURRENT_USER)
  // const useSetCurrentUser = () => useMutation<SetCurrentUserResponseType, SetCurrentUserVarsType | null>(SET_CURRENT_USER)
  const login = async () => {
    return await firebaseLogin()
  }
  const logout = async () => {
    return await firebaseLogout()
  }
  return {
    // useGetCurrentUser,
    // useSetCurrentUser,
    login,
    logout
  }
}