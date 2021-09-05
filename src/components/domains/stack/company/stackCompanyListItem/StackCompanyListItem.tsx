import { Link } from "@/components/common/Link"
import { Item } from "@/components/common/List/Item"

interface Props {
  id: string
  name: string
  imagePath: string  
}

export const StackCompanyListItem = ({ id, name, imagePath } : Props) => {
  return (
    <Link href={`/companies/${id}`}>
      <Item name={name} imageSrc={imagePath} iconShape='rouded' iconSize='s' />    
    </Link>
  )
}
