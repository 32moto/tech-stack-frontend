// import components
import CompanyStackList from "@/components/domains/company/companyStackList/CompanyStackList";
// import repository
import {companyRepository} from "@/repository/companyRepository";

interface Props {
  companyId: string
}

const CompanyStackListContainer = ({companyId}: Props) => {
  const { data, loading } = companyRepository().useGetCompanyStack({id: companyId})

  if(loading) return <p>loading...</p>
  if(!data) return null

  return <CompanyStackList stacks={data.company.stacks} />
}

export default CompanyStackListContainer