import { useRouter } from "next/router"
import { useCurrentUser } from "@/hooks/auth/useCurrentUser"

export const useIsMine = () => {
  const currentUser = useCurrentUser()
  const { id } = useRouter().query
  const isMine = id === currentUser?.id
  return { isMine }
}