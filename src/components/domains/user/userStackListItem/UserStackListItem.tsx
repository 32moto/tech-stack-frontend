import { IconTextItem } from "@/components/common/List/IconTextItem"
import { StackType } from "@/types/user/stack"

interface Props {
  stack: StackType
}

export const UserStackListItem = ({ stack } :Props) => {
  return (
    <IconTextItem name={stack.name} imageSrc={stack.imagePath} iconShape='rouded' iconSize='s' />
  )
}