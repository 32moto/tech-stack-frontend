import { userRepository } from "@/application/users/repository"

export const getUser = ({id}: {id: string}) => {
  return userRepository().getUser({id})
}