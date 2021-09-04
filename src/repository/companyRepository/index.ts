import { useQuery } from "@apollo/client"
import { GetCompanyParamsType } from '@/types/company'
import { GetCompanyResponseType, GetCompanyVarsType } from "@/types/api/company";
import { GET_COMPANY } from "./query"

export const companyRepository = () => {
  const useGetCompany = ({ id }: GetCompanyParamsType) => {
    console.log(id)
    return useQuery<GetCompanyResponseType, GetCompanyVarsType>(GET_COMPANY, {variables : {id}})
  }
  return {
    useGetCompany
  }
}