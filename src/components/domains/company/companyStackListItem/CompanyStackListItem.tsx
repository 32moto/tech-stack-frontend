import { IconTextItem } from "@/components/common/List/IconTextItem"
import { CompanyStackType } from "@/types/company";

interface Props {
  stack: CompanyStackType
}

export const CompanyStackListItem = ({ stack } :Props) => {
  return (
    <IconTextItem name={stack.name} imageSrc={stack.iconPath} iconShape='rouded' iconSize='s' />
  )
}