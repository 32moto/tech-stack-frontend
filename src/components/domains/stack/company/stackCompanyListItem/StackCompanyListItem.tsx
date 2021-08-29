import { Item } from "@/components/common/List/Item"
import { StackCompanyType } from "@/types/stack/company"

interface Props {
  company: StackCompanyType
}

export const StackCompanyListItem = ({company} : Props) => {
  return <Item name={company.name} imageSrc={company.defaultImagePath} iconShape='rouded' iconSize='s' />
}
