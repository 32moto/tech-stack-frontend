import { Link } from '@/components/common/Link'
import { login, logout } from '@/libs/firebase/auth'

export default function Home() {
  return (
    <div>
      <h2>Routes</h2>
      <ul>
        <li>
          <Link href={`/stacks/${1}/companies`}>stacks/:id/companies</Link>
        </li>
      </ul>
      <button onClick={() => {login()}}>login</button>
      <button onClick={() => {logout()}}>logout</button>
    </div>
  )
}
