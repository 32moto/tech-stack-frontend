import styled from 'styled-components'
import { StackUserType } from "@/types/stack/user"
import { sp, pc } from '@/config/media'
// stack company
import { StackUserListItem } from '@/components/domains/stack/user/stackUserListItem'

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
            <StackUserListItem user={user} />
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
  font-size: ${({theme}) => theme.fonts.size[18]};
`

const Ul = styled.ul`
  margin-top: 8px;
`