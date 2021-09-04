import { useRouter } from "next/router"
import { UserInfoContainer } from "@/components/domains/user/userInfo"


const User = () => {
  const { id } = useRouter().query
  return (
    <div>
      <UserInfoContainer id={String(id)} />
    </div>
  )
}

export default User