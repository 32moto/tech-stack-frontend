import { authRepository } from "@/repository/authRepository"
import { Login } from "./Login"

export const LoginContainer = () => {
  const { login } = authRepository()
  return <Login handleLogin={login} />
}