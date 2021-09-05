import { Item } from "@/components/common/List/Item"

interface Props {
  name: string
  iconPath: string  
}

export const StackCompanyListItem = ({name, iconPath} : Props) => {
  return <Item name={name} imageSrc={iconPath} iconShape='rouded' iconSize='s' />
}
