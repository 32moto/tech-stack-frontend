import { StackCompanyType } from "@/types/stack/company"
import { StackCompanyListItem } from "./StackCompanyListItem"

interface Props {
  company: StackCompanyType
}

export const StackCompanyListItemContainer = ({company} : Props) => {
  return <StackCompanyListItem name={company.name} iconPath={company.defaultImagePath} />
}
