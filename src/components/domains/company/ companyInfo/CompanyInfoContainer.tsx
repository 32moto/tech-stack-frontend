import CompanyInfo from "@/components/domains/company/ companyInfo/CompanyInfo";
import {companyRepository} from "@/repository/companyRepository";

interface Props {
  companyId: string
}

const CompanyInfoContainer = ({companyId}: Props) => {
  const { data, loading } = companyRepository().useGetCompany({id: companyId})
  if(loading) return <p>loading...</p>
  if(!data) return null
  console.log(data)
  return (
    <CompanyInfo companyName={data.company.name} imagePath={data.company.imagePath} />
  )
}

export default CompanyInfoContainer

