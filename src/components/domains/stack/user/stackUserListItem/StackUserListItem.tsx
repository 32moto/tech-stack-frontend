import { Item } from "@/components/common/List/Item"

interface Props {
  name: string
  iconPath: string
}


export const StackUserListItem = ({ name, iconPath } : Props) => {
  return <Item name={name} imageSrc={iconPath} iconShape='circle' iconSize='s' />
}
