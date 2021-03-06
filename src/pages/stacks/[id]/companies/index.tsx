import { GetServerSideProps, GetServerSidePropsResult } from "next"
import { StackInfoContainer } from "@/components/domains/stack/stackInfo"
import { StackCompanyListContainer } from "@/components/domains/stack/company/stackCompanyList"
import { StackCompanyType } from "@/types/stack/company"
import { getStackAndCompanies } from "@/application/stack/usecase"

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

export const getServerSideProps: GetServerSideProps = async ({ params }): Promise<GetServerSidePropsResult<Props>> => {
  if(!params) {
    return {
      notFound: true
    }
  }
  const { data } = await getStackAndCompanies({id: String(params.id)})
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
