import { useListenAuthState } from "@/hooks/auth/useListenAuthState";

export const AppConfig = () => {
  useListenAuthState()
  return null
}