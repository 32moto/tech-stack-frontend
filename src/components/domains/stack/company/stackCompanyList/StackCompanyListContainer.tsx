import { StackCompanyType } from "@/types/stack/company"
// StackCompanyList
import { StackCompanyList } from "./StackCompanyList"


interface Props {
  companies: StackCompanyType[]
}

export const StackCompanyListContainer = ({companies} : Props) => {
  return <StackCompanyList companies={companies} />
}