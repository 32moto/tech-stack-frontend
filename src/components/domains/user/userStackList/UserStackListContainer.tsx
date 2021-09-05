import { useGetUserStacks } from "./hooks";
import { UserStackList } from "./UserStackList";

interface Props {
  id: string
}

export const UserStackListContainer = ({ id }: Props) => {
  const {stacks, loading, error} = useGetUserStacks({ id })
  return (
    <UserStackList stacks={stacks} />
  )
}