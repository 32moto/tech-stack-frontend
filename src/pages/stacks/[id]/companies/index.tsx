import { useRouter } from "next/router"
import { StackInfoContainer } from "@/components/domains/stack/stackInfo"
import { StackCompanyListContainer } from "@/components/domains/stack/company/stackCompanyList"

const StackCompanies = () => {
  const { id } = useRouter().query
  return (
    <div>
      <StackInfoContainer id={String(id)} />
      <StackCompanyListContainer stackId={String(id)} />
    </div>
  )
}

export default StackCompanies