import { stackRepository } from "@/application/stack/repository"

export const getStackAndUsers = ({id}: {id: string}) => {
  return stackRepository().getStackAndUsers({id})
}