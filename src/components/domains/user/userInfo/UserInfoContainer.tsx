import { UserInfo } from './UserInfo'

interface Props {
  userName: string
  userImagePath: string | null
}

const defaultUserImg = 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'

export const UserInfoContainer = ({ userName, userImagePath } : Props) => {
  return <UserInfo userName={userName} imagePath={userImagePath || defaultUserImg} />
}