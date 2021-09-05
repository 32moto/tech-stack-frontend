// StackUserList
import { useGetStackUsers } from "./hooks"
import { StackUserList } from "./StackUserList"


interface Props {
  stackId: string
}

export const StackUserListContainer = ({ stackId } : Props) => {
  const {users, loading} = useGetStackUsers({stackId})
  if(loading) return <p>loading...</p>
  if(!users) return null
  return <StackUserList users={users} />
}