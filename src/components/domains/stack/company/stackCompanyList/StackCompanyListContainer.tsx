import { useFetchStackCompanies } from "./hooks"
import StackCompanyList from "./StackCompanyList"

interface Props {
  stackId: string
}

const StackCompanyListContainer = ({stackId} : Props) => {
  const {data, loading} = useFetchStackCompanies({id: stackId})
  if(loading) return <p>loading...</p>
  if(!data) return null
  return <StackCompanyList companies={data} />
}

export default StackCompanyListContainer