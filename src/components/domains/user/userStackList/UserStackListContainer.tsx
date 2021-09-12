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
  const handleEditButtonOnClick = () => console.log('edit')
  const handleAddButtonOnClick = () => console.log('add')
  return (
    <UserStackList
      stacks={stacks}
      isMine={isMine}
      handleEditButtonOnClick={handleEditButtonOnClick}
      handleAddButtonOnClick={handleAddButtonOnClick}
    />
  )
}