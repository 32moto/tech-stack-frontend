import { StackType } from "@/types/user/stack";
import { UserStackList } from "./UserStackList";

interface Props {
  stacks: StackType[]
}

export const UserStackListContainer = ({ stacks }: Props) => {
  return (
    <UserStackList stacks={stacks} />
  )
}