import { StackType } from "@/types/user/stack";
import { UserStackList } from "./UserStackList";
import { useIsMine } from "./hooks";

interface Props {
  stacks: StackType[]
}

export const UserStackListContainer = ({ stacks }: Props) => {
  const { isMine } = useIsMine()
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