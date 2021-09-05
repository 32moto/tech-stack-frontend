import { Link } from '@/components/common/Link'
import { LoginContainer } from '@/components/domains/auth/Login'
import { LogoutContainer } from '@/components/domains/auth/Logout'
import styled from "styled-components";


export default function Home() {
  return (
    <div>
      <h2>Routes</h2>
      <ul>
        <Li>
          <Link href={`/stacks/${1}/companies`}>stacks/:id/companies</Link>
        </Li>
        <Li>
          <Link href={`/stacks/${1}/users`}>stacks/:id/users</Link>
        </Li>
        <Li>
          <Link href={`/users/${1}`}>users/:id</Link>
        </Li>
        <Li>
          <Link href={`/companies/${1}`}>companies/:id</Link>
        </Li>
      </ul>
      <LoginContainer />
      <LogoutContainer />
    </div>
  )
}

const Li = styled.li`
  display: flex;
  flex-direction: column;
`