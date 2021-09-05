import { useRouter } from "next/router"
import { UserInfoContainer } from "@/components/domains/user/userInfo"
import { UserStackListContainer } from "@/components/domains/user/userStackList"
import { MarginPaddingWrapper } from "@/components/common/Wrapper"


const User = () => {
  const { id } = useRouter().query
  return (
    <div>
      <UserInfoContainer id={String(id)} />
      <MarginPaddingWrapper marginLeft={16} marginRight={16}>
        <UserStackListContainer id={String(id)} />
      </MarginPaddingWrapper>
    </div>
  )
}

export default User