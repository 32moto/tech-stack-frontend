import { companyRepository } from "@/application/company/repository";

export const getCompany = ({id}: {id: string}) => {
  const data = companyRepository().useGetCompany({id})
  return data
}
