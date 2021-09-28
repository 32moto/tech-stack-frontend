import { companyRepository } from "@/application/company/repository";

export const getCompanyAndUsers = ({id}: {id: string}) => {
  const data = companyRepository().getCompanyAndUsers({id})
  return data
}
