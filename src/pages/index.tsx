import { Link } from '@/components/common/Link'

export default function Home() {
  return (
    <div>
      <h2>Routes</h2>
      <ul>
        <li>
          <Link href={`/stacks/${1}/companies`}>stacks/:id/companies</Link>
        </li>
      </ul>
    </div>
  )
}
