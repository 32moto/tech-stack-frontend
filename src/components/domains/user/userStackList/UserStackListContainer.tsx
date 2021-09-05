import { useGetUserStacks } from "./hooks";
import { UserStackList } from "./UserStackList";

interface Props {
  id: string
}

export const UserStackListContainer = ({ id }: Props) => {
  const {stacks, loading, error} = useGetUserStacks({ id })
  if(error) return <p>error</p>
  if(loading) return <p>loading...</p>
  if(!stacks) return null
  return (
    <UserStackList stacks={stacks} />
  )
}