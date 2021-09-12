// import components
import CompanyStackList from "@/components/domains/company/companyStackList/CompanyStackList";
// import types
import { CompanyStackType } from "@/types/company";

interface Props {
  stacks: CompanyStackType[]
}

const CompanyStackListContainer = ({stacks}: Props) => {

  return <CompanyStackList stacks={stacks} />
}

export default CompanyStackListContainer