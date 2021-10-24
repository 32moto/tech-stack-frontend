// import components
import CompanyStackList from "@/components/domains/company/companyStackList/CompanyStackList";
// import types
import { CompanyStackType } from "@/types/company";

interface Props {
  stacks: CompanyStackType[]
}

const CompanyStackListContainer = ({stacks}: Props) => {
  const handleEditButtonOnClick = () => console.log('edit')
  const handleAddButtonOnClick = () => console.log('add')

  return <CompanyStackList stacks={stacks} handleEditButtonOnClick={handleEditButtonOnClick} handleAddButtonOnClick={handleAddButtonOnClick}/>
}

export default CompanyStackListContainer