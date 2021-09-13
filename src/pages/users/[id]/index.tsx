import { GetServerSideProps } from "next"
import { UserInfoContainer } from "@/components/domains/user/userInfo"
import { UserStackListContainer } from "@/components/domains/user/userStackList"
import { MarginPaddingWrapper } from "@/components/common/Wrapper"
import { UserType } from "@/types/user"
import { getUser } from "@/application/users/usecase"

interface Props {
  user: UserType
}

const User = ({ user }: Props) => {
  return (
    <div>
      <UserInfoContainer userName={user.name} userImagePath={user.imagePath} />
      <MarginPaddingWrapper marginLeft={16} marginRight={16}>
        <UserStackListContainer stacks={user.stacks} />
      </MarginPaddingWrapper>
    </div>
  )
}

export default User

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if(!params) {
    return {
      notFound: true
    }
  }
  const { data } = await getUser({id: String(params.id)})
  if(!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      user: data.user,
    }
  }
}