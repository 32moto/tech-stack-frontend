import { stackRepository } from "@/application/stack/repository"

interface Props {
  stackId: string
}

export const useGetStackUsers = ({stackId}: Props) => {
  const { data, error, loading} = stackRepository().useGetStackUsers({id: stackId})
  return {
    users: data?.getStack.users,
    error,
    loading
  }
}