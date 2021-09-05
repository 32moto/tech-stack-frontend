// StackCompanyList
import { useGetStackCompanies } from "./hooks"
import { StackCompanyList } from "./StackCompanyList"


interface Props {
  stackId: string
}

export const StackCompanyListContainer = ({stackId} : Props) => {
  const {companies, loading} = useGetStackCompanies({stackId})
  if(loading) return <p>loading...</p>
  if(!companies) return null
  return <StackCompanyList companies={companies} />
}