import styled from 'styled-components'
import { StackCompanyType } from "@/types/stack/company"
import { sp, pc } from '@/config/media'
import { FONT_SIZES } from '@/constants/Styles'
// stack company
import { StackCompanyListItemContainer } from '@/components/domains/stack/company/stackCompanyListItem'

interface Props {
  companies: StackCompanyType[]
}

export const StackCompanyList = ({companies} : Props) => {
  return (
    <Wrapper>
      <H3>Companies</H3>
      <Ul>
      {companies.map(company => (
          <li key={company.id}>
            <StackCompanyListItemContainer company={company} />
          </li>
        ))}
      </Ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${sp``}
  ${pc``}
`

const H3 = styled.h3`
  text-align: center;
  font-size: ${FONT_SIZES.FS_18};
`

const Ul = styled.ul`
  margin-top: 8px;
`