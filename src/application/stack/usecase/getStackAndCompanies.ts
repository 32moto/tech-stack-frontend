import { stackRepository } from "@/application/stack/repository"

export const getStackAndCompanies = ({id}: {id: string}) => {
  return stackRepository().getStackAndCompanies({id})
}