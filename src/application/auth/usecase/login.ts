import { authRepository } from "@/application/auth/repository"

export const login = () => {
  return authRepository().login()
}