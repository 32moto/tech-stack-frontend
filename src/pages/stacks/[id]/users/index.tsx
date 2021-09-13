import { GetServerSideProps, GetServerSidePropsResult } from "next"
import { StackInfoContainer } from "@/components/domains/stack/stackInfo"
import { StackUserListContainer } from "@/components/domains/stack/user/stackUserList"
import { StackUserType } from "@/types/stack/user"
import { getStackAndUsers } from "@/application/stack/usecase"

interface Props {
  stack: {
    id: string
    name: string
    imagePath: string
    users: StackUserType[]
  }
}

const StackUsers = ({ stack }: Props) => {
  return (
    <div>
      <StackInfoContainer stackName={stack.name} stackImagePath={stack.imagePath} />
      <StackUserListContainer stackUsers={stack.users} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }): Promise<GetServerSidePropsResult<Props>> => {
  if(!params) {
    return {
      notFound: true
    }
  }
  const { data } = await getStackAndUsers({id: params.id as string})
  if(!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      stack: data.stack,
    }
  }
}

export default StackUsers