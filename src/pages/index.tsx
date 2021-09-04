import { Link } from '@/components/common/Link'
import { LoginContainer } from '@/components/domains/auth/Login'
import { LogoutContainer } from '@/components/domains/auth/Logout'


export default function Home() {
  return (
    <div>
      <h2>Routes</h2>
      <ul>
        <li>
          <Link href={`/stacks/${1}/companies`}>stacks/:id/companies</Link>
        </li>
        <li>
          <Link href={`/users/${1}`}>users/:id</Link>
        </li>
      </ul>
      <LoginContainer />
      <LogoutContainer />
    </div>
  )
}
