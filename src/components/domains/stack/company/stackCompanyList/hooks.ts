import { stackRepository } from "@/repository/stackRepository";

interface UseGetStackCompaniesParams {
  stackId: string
}

export const useGetStackCompanies = ({ stackId }: UseGetStackCompaniesParams) => {
  const { data, error, loading} = stackRepository().useGetStackCompanies({id: stackId})
  return {
    companies: data?.getStack.companies,
    error,
    loading
  }
}