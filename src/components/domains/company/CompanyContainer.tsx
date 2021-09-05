// import component
import CompanyStackList from "@/components/domains/company/CompanyStackList";
import CompanyInfoContainer from "@/components/domains/company/ companyInfo/CompanyInfoContainer";
// import repository
import { companyRepository } from "@/repository/companyRepository";

interface Props {
  companyId: string
}

const CompanyContainer = ({companyId}: Props) => {
  const { data, loading } = companyRepository().useGetCompany({id: companyId})
  if(loading) return <p>loading...</p>
  if(!data) return null
  console.log(data)
  return (
    <div>
      <CompanyInfoContainer companyName={data.company.name} icon={data.company.defaultImagePath} />
      <CompanyStackList stacks={data.company.stacks} />
    </div>
  )
}
export default CompanyContainer


