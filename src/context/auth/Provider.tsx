import { useCurrentUser } from "@/hooks/auth/useCurrentUser"
import { AuthContext } from "./context"

interface Props {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const { currentUser } = useCurrentUser()
  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}