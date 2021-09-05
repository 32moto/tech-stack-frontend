import { Link } from "@/components/common/Link"
import { Item } from "@/components/common/List/Item"

interface Props {
  id: string
  name: string
  iconPath: string
}


export const StackUserListItem = ({ id, name, iconPath } : Props) => {
  return (
    <Link href={`/users/${id}`}>
      <Item name={name} imageSrc={iconPath} iconShape='circle' iconSize='s' />
    </Link>
  )
}
