import { GetServerSideProps } from "next"
import { StackInfoContainer } from "@/components/domains/stack/stackInfo"
import { StackCompanyListContainer } from "@/components/domains/stack/company/stackCompanyList"
import { stackRepository } from "@/repository/stackRepository"
import { StackCompanyType } from "@/types/stack/company"

interface Props {
  stack: {
    id: string
    name: string
    imagePath: string
    companies: StackCompanyType[]
  }
}

const StackCompanies = ({stack}: Props) => {
  return (
    <div>
      <StackInfoContainer stackName={stack.name} stackImagePath={stack.imagePath} />
      <StackCompanyListContainer companies={stack.companies} />
    </div>
  )
}

export default StackCompanies

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if(!params) {
    return {
      notFound: true
    }
  }
  const { data } = await stackRepository().getStackAndCompanies({id: String(params.id)})
  if(!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      stack: data.stack,
    }
  }
}
