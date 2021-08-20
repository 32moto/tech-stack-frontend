import { useRouter } from "next/dist/client/router"

const StackCompanies = () => {
  const { id } = useRouter().query
  return (
    <div>
      <p>stack id: {id}</p>
      <p>companies</p>
    </div>
  )
}

export default StackCompanies