import { GetServerSideProps } from "next"
import { StackInfoContainer } from "@/components/domains/stack/stackInfo"
import { StackUserListContainer } from "@/components/domains/stack/user/stackUserList"
import { stackRepository } from "@/repository/stackRepository"
import { StackUserType } from "@/types/stack/user"

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if(!params) {
    return {
      notFound: true
    }
  }
  const { data } = await stackRepository().getStackAndUsers({id: String(params.id)})
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