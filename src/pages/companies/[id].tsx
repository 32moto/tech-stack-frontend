import { GetServerSideProps } from "next"
import CompanyInfoContainer from "@/components/domains/company/ companyInfo/CompanyInfoContainer";
import CompanyStackListContainer from "@/components/domains/company/companyStackList/CompanyStackListContainer";
import { CompanyType } from "@/types/company";
import { getCompany } from "@/application/company/usecase";

interface Props {
  company: CompanyType
}

const Company = ({company}: Props) => {

  return (
    <div>
      <CompanyInfoContainer name={company.name} imagePath={company.imagePath}/>
      <CompanyStackListContainer stacks={company.stacks}/>
    </div>
  )
}

export default Company

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if(!params) {
    return {
      notFound: true
    }
  }
  const { data } = await getCompany({id: String(params.id)})

  if(!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      company: data.company
    }
  }
}