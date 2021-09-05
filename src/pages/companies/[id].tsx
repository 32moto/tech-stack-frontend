import { useRouter } from "next/dist/client/router"
import CompanyContainer from "@/components/domains/company/CompanyContainer";

const Company = () => {
  const { id } = useRouter().query

  return (
    <CompanyContainer companyId={String(id)}/>
  )
}

export default Company