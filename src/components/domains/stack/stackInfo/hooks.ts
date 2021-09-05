import { stackRepository } from "@/repository/stackRepository"
import { UseGetStackParams } from "@/types/stack"

export const useGetStack = ({ id }: UseGetStackParams) => {
  // const {data, error, loading} = stackRepository().useGetStack({ id })
  return {
    stack: { id: '1', name: 'React', iconPath: 'https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png' },
    error: undefined,
    loading: false
  }
}