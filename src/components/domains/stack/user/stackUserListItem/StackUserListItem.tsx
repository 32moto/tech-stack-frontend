import { Item } from "@/components/common/List/Item"
import { StackUserType } from "@/types/stack/user"

interface Props {
  user: StackUserType
}

const defaultUserImg = 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'

export const StackUserListItem = ({ user } : Props) => {
  return <Item name={user.name} imageSrc={user.iconPath || defaultUserImg} iconShape='circle' iconSize='s' />
}
