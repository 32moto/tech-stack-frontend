import { authRepository } from "@/repository/authRepository"

export const useCurrentUser = () => {
  const { data } = authRepository().useGetCurrentUser()
  return {
    currentUser: data
  }
}