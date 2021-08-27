import { useRouter } from "next/dist/client/router"
import Sample from "@/components/company/Sample";

const Company = () => {
  const { id } = useRouter().query
  return (
    <Sample companyId={id}/>
  )
}

export default Company