import { companyRepository } from "@/application/company/repository";

export const getCompany = ({id}: {id: string}) => {
  const data = companyRepository().getCompany({id})
  return data
}
