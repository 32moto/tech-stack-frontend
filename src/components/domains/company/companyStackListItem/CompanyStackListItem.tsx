import { IconTextItem } from "@/components/common/List/IconTextItem"
import { StackType } from "@/types/user/stack"

interface Props {
  stack: StackType
}

export const CompanyStackListItem = ({ stack } :Props) => {
  return (
    <IconTextItem name={stack.name} imageSrc={stack.iconPath} iconShape='rouded' iconSize='s' />
  )
}