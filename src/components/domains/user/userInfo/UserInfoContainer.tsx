import { useGetUser } from './hooks'
import { UserInfo } from './UserInfo'

interface Props {
  id: string
}

export const UserInfoContainer = ({ id } : Props) => {
  const { user, error, loading } = useGetUser({id})
  if(error) return <p>error</p>
  if(loading) return <p>loading...</p>
  if(!user) return null
  return <UserInfo userName={user.name} imagePath={user.imagePath} />
}