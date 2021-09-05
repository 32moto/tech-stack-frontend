// import components
import {CompanyStackListItem} from "@/components/domains/company/companyStackListItem/CompanyStackListItem";
// import types
import { StackType } from "@/types/user/stack"


interface Props {
  stack: StackType
}

export const CompanyStackListItemContainer = ({ stack }: Props) => {
  return <CompanyStackListItem stack={stack} />
}