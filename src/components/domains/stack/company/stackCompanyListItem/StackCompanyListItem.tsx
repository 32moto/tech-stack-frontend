import { Link } from "@/components/common/Link"
import { Item } from "@/components/common/List/Item"

interface Props {
  id: string
  name: string
  iconPath: string  
}

export const StackCompanyListItem = ({ id, name, iconPath } : Props) => {
  return (
    <Link href={`/companies/${id}`}>
      <Item name={name} imageSrc={iconPath} iconShape='rouded' iconSize='s' />    
    </Link>
  )
}
