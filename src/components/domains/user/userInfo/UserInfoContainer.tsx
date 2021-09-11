import { UserInfo } from './UserInfo'

interface Props {
  userName: string
  userImagePath: string | null
}

export const UserInfoContainer = ({ userName, userImagePath } : Props) => {
  return <UserInfo userName={userName} imagePath={userImagePath} />
}