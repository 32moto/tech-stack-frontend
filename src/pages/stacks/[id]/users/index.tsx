import { useRouter } from "next/router"
import { StackInfoContainer } from "@/components/domains/stack/stackInfo"
import { StackUserListContainer } from "@/components/domains/stack/user/stackUserList"


const StackUsers = () => {
  const { id } = useRouter().query
  return (
    <div>
      <StackInfoContainer id={Number(id)} />
      <StackUserListContainer stackId={String(id)} />
    </div>
  )
}

export default StackUsers