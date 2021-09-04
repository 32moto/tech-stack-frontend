import { useGetUser } from './hooks'
import { UserInfo } from './UserInfo'

interface Props {
  id: string
}

export const UserInfoContainer = ({ id } : Props) => {
  const { data } = useGetUser({id})
  return <UserInfo userName={data.name} icon={data.iconPath} />
}