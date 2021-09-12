import { useRouter } from "next/router";
import { StackType } from "@/types/user/stack";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { UserStackList } from "./UserStackList";

interface Props {
  stacks: StackType[]
}

export const UserStackListContainer = ({ stacks }: Props) => {
  const currentUser = useCurrentUser()
  const { id } = useRouter().query
  const isMine = id === currentUser?.id
  return (
    <UserStackList stacks={stacks} isMine={isMine} />
  )
}