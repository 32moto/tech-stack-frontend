import styled from 'styled-components'
import { StackUserType } from "@/types/stack/user"
import { FONT_SIZES } from '@/constants/Styles'
import { sp, pc } from '@/config/media'
// stack company
import { StackUserListItemContainer } from '@/components/domains/stack/user/stackUserListItem'

interface Props {
  users: StackUserType[]
}

export const StackUserList = ({ users } : Props) => {
  return (
    <Wrapper>
      <H3>Users</H3>
      <Ul>
      {users.map(user => (
          <li key={user.id}>
            <StackUserListItemContainer user={user} />
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