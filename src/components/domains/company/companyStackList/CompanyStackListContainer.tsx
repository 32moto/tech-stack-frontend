import { useState } from 'react'
import styled from "styled-components";
// import components
import CompanyStackList from "@/components/domains/company/companyStackList/CompanyStackList";
import CompanyStackModalContainer from "@/components/domains/company/companyStackModal/companyStackModalContainer";
// import types
import { CompanyStackType } from "@/types/company";

interface Props {
  stacks: CompanyStackType[]
}

const CompanyStackListContainer = ({stacks}: Props) => {
  const [isOpenStackAddModal, setStackAddModal] = useState(false)
  const handleEditButtonOnClick = () => console.log('edit')
  const handleAddButtonOnClick = () => {
    setStackAddModal(true)
  }

  return (
    <Container>
      <CompanyStackList
        stacks={stacks}
        handleEditButtonOnClick={handleEditButtonOnClick}
        handleAddButtonOnClick={handleAddButtonOnClick}
      />
      {isOpenStackAddModal &&
       <CompanyStackModalContainer />
      }
    </Container>
  )
}

export default CompanyStackListContainer

const Container = styled.div`
  position: relative;
`