// import components
import {CompanyStackListItem} from "@/components/domains/company/companyStackListItem/CompanyStackListItem";
// import types
import { CompanyStackType } from "@/types/company";


interface Props {
  stack: CompanyStackType
}

export const CompanyStackListItemContainer = ({ stack }: Props) => {
  return <CompanyStackListItem stack={stack} />
}