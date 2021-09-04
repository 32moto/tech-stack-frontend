import { authRepository } from "@/repository/authRepository"
import { Logout } from "./Logout"

export const LogoutContainer = () => {
  const { logout } = authRepository()
  return <Logout handleLogout={logout} />
}