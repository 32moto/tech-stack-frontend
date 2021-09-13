import { userRepository } from "@/application/user/repository"

export const getUser = ({id}: {id: string}) => {
  return userRepository().getUser({id})
}