import { login } from "@/application/auth/usecase"
import { Login } from "./Login"

export const LoginContainer = () => {
  return <Login handleLogin={login} />
}