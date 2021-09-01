import { createContext } from "react";
import { CurrentUserType } from "@/types/auth";

interface AuthContextType {
  currentUser: CurrentUserType | undefined
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: undefined
})