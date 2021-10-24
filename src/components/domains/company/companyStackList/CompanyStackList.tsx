import styled from 'styled-components'
// import component
import { CompanyStackListItemContainer } from "@/components/domains/company/companyStackListItem/CompanyStackListItemContainer";
// import types
import { CompanyStackType } from "@/types/company";
import {CirclePlusButton} from "@/components/common/Button";
import {PencilButton} from "@/components/common/Button/PencilButton";


interface Props {
  stacks: CompanyStackType[]
  handleEditButtonOnClick: () => void
  handleAddButtonOnClick: () => void
}

const CompanyStackList = ({stacks, handleAddButtonOnClick, handleEditButtonOnClick}: Props) => {

  return (
    <Container>
      <EditButtonWrapper>
        <PencilButton onClick={handleEditButtonOnClick} />
      </EditButtonWrapper>
      <Ul>
        {stacks.map(stack => (
          <Li key={stack.id}>
            <CompanyStackListItemContainer stack={stack}/>
          </Li>
        ))}
      </Ul>
      <AddButtonWrapper role='button'>
        <CirclePlusButton onClick={handleAddButtonOnClick} />
      </AddButtonWrapper>
    </Container>
  )
}

export default CompanyStackList

const Container = styled.div`
  position: relative;
`

const EditButtonWrapper = styled.div`
  position: absolute;
  top: -16px;
  right: 0;
`

const Ul = styled.ul`
  display: flex;
  margin: 0px 40px;
`

const Li = styled.li`
  width: 100px;
`

const AddButtonWrapper = styled.div`
  position: fixed;
  right: 30px;
  bottom: 90px;
`
