import { userRepository } from "@/application/user/repository"

interface Props {
  id: string
}

export const useGetUserStacks = ({id}: Props) => {
  const {data, error, loading} = userRepository().useGetUserStacks({id})
  return {
    stacks: data?.getUser.stacks,
    loading,
    error
  }
}