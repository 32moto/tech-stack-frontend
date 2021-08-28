import { useRouter } from "next/dist/client/router"
import StackInfoContainer from "@/components/domains/stack/stackInfo/StackInfoContainer"

const StackCompanies = () => {
  const { id } = useRouter().query
  return (
    <div>
      <StackInfoContainer id={Number(id)} />
      <p>companies</p>
    </div>
  )
}

export default StackCompanies