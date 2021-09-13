import { authRepository } from "@/application/auth/repository"

export const logout = () => {
  return authRepository().logout()
}