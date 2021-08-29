import styled from 'styled-components'
import { StackCompanyType } from "@/types/stack/company"
import { sp, pc } from '@/config/media'

interface Props {
  companies: StackCompanyType[]
}

const StackCompanyList = ({companies} : Props) => {
  return (
    <Ul>
      {companies.map(company => (
        <li key={company.id}>
          <p>{company.name}</p>
        </li>
      ))}
    </Ul>
  )
}

export default StackCompanyList

const Ul = styled.ul`
  ${sp`

  `}
  ${pc`
    display: none;
  `}
`