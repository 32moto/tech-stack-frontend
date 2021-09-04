import { StackCompanyType } from "@/types/stack/company"
// StackCompanyList
import { useFetchStackCompanies } from "./hooks"
import StackCompanyList from "./StackCompanyList"


interface Props {
  stackId: string
}

// TODO apiと接続出来次第削除
const mockCompanies: StackCompanyType[] = [
  {
    id: '1',
    name: 'Techカンパニー',
    defaultImagePath: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
  },
  {
    id: '2',
    name: '株式会社 HOGE',
    defaultImagePath: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
  },
  {
    id: '3',
    name: '株式会社 booboo',
    defaultImagePath: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
  },
  {
    id: '4',
    name: '株式会社 yunboo',
    defaultImagePath: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
  },
]

const StackCompanyListContainer = ({stackId} : Props) => {
  // const {companies, loading} = useFetchStackCompanies({id: stackId})
  // if(loading) return <p>loading...</p>
  // if(!companies) return null
  // return <StackCompanyList companies={companies} />
  return <StackCompanyList companies={mockCompanies} />
}

export default StackCompanyListContainer