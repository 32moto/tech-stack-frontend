import { StackUserType } from "@/types/stack/user"
import { StackUserList } from "./StackUserList"


interface Props {
  stackUsers: StackUserType[]
}

export const StackUserListContainer = ({ stackUsers } : Props) => {
  return <StackUserList users={stackUsers} />
}