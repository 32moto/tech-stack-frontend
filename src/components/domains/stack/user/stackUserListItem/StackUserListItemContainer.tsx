import { StackUserType } from "@/types/stack/user"
import { StackUserListItem } from "./StackUserListItem"

interface Props {
  user: StackUserType
}

const defaultUserImg = 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'

export const StackUserListItemContainer = ({ user } : Props) => {
  return <StackUserListItem name={user.name} iconPath={user.iconPath || defaultUserImg} />
}
