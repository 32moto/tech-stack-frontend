// import component
import CompanyInfoContainer from "@/components/domains/company/ companyInfo/CompanyInfoContainer";
import CompanyStackListContainer from "@/components/domains/company/companyStackList/CompanyListContainer";
// import repository
import { companyRepository } from "@/repository/companyRepository";

interface Props {
  companyId: string
}

const CompanyContainer = ({companyId}: Props) => {
  const { data, loading } = companyRepository().useGetCompany({id: companyId})
  if(loading) return <p>loading...</p>
  if(!data) return null

  return (
    <div>
      <CompanyInfoContainer companyName={data.company.name} icon={data.company.defaultImagePath} />
      <CompanyStackListContainer stacks={data.company.stacks} />
    </div>
  )
}
export default CompanyContainer


