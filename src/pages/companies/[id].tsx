import { GetServerSideProps } from "next"
import CompanyInfoContainer from "@/components/domains/company/ companyInfo/CompanyInfoContainer";
import CompanyStackListContainer from "@/components/domains/company/companyStackList/CompanyStackListContainer";
import { companyRepository } from "@/repository/companyRepository";
import { CompanyType } from "@/types/company";

interface Props {
  company: CompanyType
}


const Company = ({company}: Props) => {
  console.log(company)
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
  const { data } = await companyRepository().useGetCompany({id: String(params.id)})

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