import { useQuery } from "@apollo/client"
import { CompanyType, GetCompanyParamsType } from '@/types/company'
import { GET_COMPANY } from "./query"

export const companyRepository = () => {
  const useGetCompany = ({ id }: GetCompanyParamsType) => {
    console.log(id)
    return useQuery<CompanyType, any>(GET_COMPANY, {variables : {id}})
  }
  return {
    useGetCompany
  }
}