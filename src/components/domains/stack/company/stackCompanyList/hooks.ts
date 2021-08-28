import { stackRepository } from "@/repository/stackRepository";
import { GetStackCompanyParamsType } from "@/types/stack/company";

export const useFetchStackCompanies = (payload: GetStackCompanyParamsType) => stackRepository().useGetStackCompanies(payload)