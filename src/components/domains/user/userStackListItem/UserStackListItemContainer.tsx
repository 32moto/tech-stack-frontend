import { StackType } from "@/types/user/stack"
import { UserStackListItem } from "./UserStackListItem"

interface Props {
  stack: StackType
}

export const UserStackListItemContainer = ({ stack }: Props) => {
  return <UserStackListItem stack={stack} />
}