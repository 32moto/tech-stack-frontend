import { userRepository } from "@/repository/userRepository"

export const useGetUser = ({id}: {id: string}) => {
  const { data, loading, error } = userRepository().useGetUser({id})
  return {
    user: data?.getUser,
    loading,
    error
  }
}