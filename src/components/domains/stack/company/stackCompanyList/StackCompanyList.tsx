import { StackCompanyType } from "@/types/stack/company"

interface Props {
  companies: StackCompanyType[]
}

const StackCompanyList = ({companies} : Props) => {
  return (
    <ul>
      {companies.map(company => (
        <li key={company.id}>
          <p>{company.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default StackCompanyList