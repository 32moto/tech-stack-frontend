import { userRepository } from "@/application/user/repository"

export const useGetUser = ({id}: {id: string}) => {
  const { data, loading, error } = userRepository().useGetUser({id})
  return {
    user: data?.user,
    loading,
    error
  }
}