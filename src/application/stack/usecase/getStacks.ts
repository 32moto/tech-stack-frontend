import { stackRepository } from "@/application/stack/repository"

export const getStacks = () => {
  return stackRepository().getStacks()
}