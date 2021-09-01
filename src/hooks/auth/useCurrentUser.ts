import { authRepository } from "@/repository/authRepository"

export const useCurrentUser = () => {
  const currentUser = authRepository().getCurrentUser()
  return {
    isAuth: currentUser != undefined,
    currentUser
  }
}