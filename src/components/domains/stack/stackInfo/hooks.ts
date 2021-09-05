import { stackRepository } from "@/repository/stackRepository"
import { UseGetStackParams } from "@/types/stack"

export const useGetStack = ({ id }: UseGetStackParams) => {
  const {data, error, loading} = stackRepository().useGetStack({ id })
  return {
    stack: data?.getStack,
    error,
    loading
  }
}