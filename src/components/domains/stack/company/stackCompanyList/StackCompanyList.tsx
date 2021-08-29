import styled from 'styled-components'
import { StackCompanyType } from "@/types/stack/company"
import { sp, pc } from '@/config/media'
// stack company
import { StackCompanyListItem } from '@/components/domains/stack/company/stackCompanyListItem'

interface Props {
  companies: StackCompanyType[]
}

const StackCompanyList = ({companies} : Props) => {
  return (
    <Wrapper>
      <H3>Companies</H3>
      <Ul>
      {companies.map(company => (
          <li key={company.id}>
            <StackCompanyListItem company={company} />
          </li>
        ))}
      </Ul>
    </Wrapper>
  )
}

export default StackCompanyList

const Wrapper = styled.div`
  ${sp`

  `}
  ${pc`
    display: none;
  `}
`

const H3 = styled.h3`
  text-align: center;
  font-size: ${({theme}) => theme.fonts.size[18]};
`

const Ul = styled.ul`
  margin-top: 8px;
`