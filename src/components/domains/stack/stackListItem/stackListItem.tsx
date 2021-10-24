import { IconTextItem } from "@/components/common/List/IconTextItem"
// import types
import { StackType } from "@/types/stack";

interface Props {
  stack: StackType
}

export const StackListItem = ({ stack } :Props) => {
  return (
    <IconTextItem name={stack.name} imageSrc={stack.imagePath} iconShape='rouded' iconSize='s' />
  )
}