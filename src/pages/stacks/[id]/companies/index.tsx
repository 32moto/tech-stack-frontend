import { useRouter } from "next/dist/client/router"
import StackInfoContainer from "@/components/domains/stack/stackInfo/StackInfoContainer"
import StackCompanyListContainer from "@/components/domains/stack/company/stackCompanyList/StackCompanyListContainer"

const StackCompanies = () => {
  const { id } = useRouter().query
  return (
    <div>
      <StackInfoContainer id={Number(id)} />
      <StackCompanyListContainer stackId={String(id)} />
    </div>
  )
}

export default StackCompanies