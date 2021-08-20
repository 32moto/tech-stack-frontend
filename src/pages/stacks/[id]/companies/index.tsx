import { useRouter } from "next/dist/client/router"

const StackCompanies = () => {
  const { id } = useRouter().query
  return (
    <div>
      <p>StackCompanies: {id}</p>
    </div>
  )
}

export default StackCompanies