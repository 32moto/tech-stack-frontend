import { GetServerSideProps, GetServerSidePropsResult } from "next"
import CompanyInfoContainer from "@/components/domains/company/ companyInfo/CompanyInfoContainer";
import { StackUserListContainer } from "@/components/domains/stack/user/stackUserList"
import { CompanyAndUsersType } from "@/types/company";
import { getCompanyAndUsers } from "@/application/company/usecase";

interface Props {
  companyAndUsers: CompanyAndUsersType
}

const Company = ({companyAndUsers}: Props) => {

  return (
    <div>
      <CompanyInfoContainer name={companyAndUsers.name} imagePath={companyAndUsers.imagePath}/>
      <StackUserListContainer stackUsers={companyAndUsers.users} />
    </div>
  )
}

export default Company

export const getServerSideProps: GetServerSideProps = async ({ params }): Promise<GetServerSidePropsResult<Props>> => {
  if (!params) {
    return {
      notFound: true
    }
  }
  const { data } = await getCompanyAndUsers({id: String(params.id)})

  if(!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      companyAndUsers: data.company
    }
  }
}