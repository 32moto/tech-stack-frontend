import { logout } from "@/application/auth/usecase"
import { Logout } from "./Logout"

export const LogoutContainer = () => {
  return <Logout handleLogout={logout} />
}