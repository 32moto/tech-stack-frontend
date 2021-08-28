import { stackRepository } from "@/repository/stackRepository";
import { GetStackCompanyParamsType } from "@/types/stack/company";

export const useFetchStackCompanies = (payload: GetStackCompanyParamsType) => {
  const { data, error, loading} = stackRepository().useGetStackCompanies(payload)
  return {
    companies: data,
    error,
    loading
  }
}