import { useRouter } from "next/dist/client/router"
import CompanyInfoContainer from "@/components/domains/company/ companyInfo/CompanyInfoContainer";
import CompanyStackListContainer from "@/components/domains/company/companyStackList/CompanyStackListContainer";


const Company = () => {
  const { id } = useRouter().query

  return (
    <div>
      <CompanyInfoContainer companyId={String(id)}/>
      <CompanyStackListContainer companyId={String(id)}/>
    </div>
  )
}

export default Company