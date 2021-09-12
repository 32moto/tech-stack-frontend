import styled from "styled-components"
// components
import { SvgIcon } from "@/components/common/Icon"
import { CirclePlusButton } from "@/components/common/Button"
// constants
import { COLORS, FONT_SIZES } from "@/constants/Styles"
// types
import { StackType } from "@/types/user/stack"
// 
import { UserStackListItemContainer } from "../userStackListItem/UserStackListItemContainer"
import { PencilButton } from "@/components/common/Button/PencilButton"

interface Props {
  stacks: StackType[]
  isMine: boolean
  handleEditButtonOnClick: () => void
  handleAddButtonOnClick: () => void
}

export const UserStackList = ({
  stacks,
  isMine,
  handleEditButtonOnClick,
  handleAddButtonOnClick
}: Props) => {
  return (
    <Container>
      {isMine && (
        <EditButtonWrapper>
          <PencilButton onClick={handleEditButtonOnClick} />
        </EditButtonWrapper> 
      )}
      <Ul>
        {stacks.map(stack => (
          <Li key={stack.id}>
            <UserStackListItemContainer stack={stack} />
          </Li>
        ))}
      </Ul>
      {isMine && (
        <AddButtonWrapper role='button'>
          <CirclePlusButton onClick={handleAddButtonOnClick} />
        </AddButtonWrapper>
      )}
    </Container>
  )
}

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
  flex-wrap: wrap;
`

const Li = styled.li`
  margin: 0 8px 8px;
`

const AddButtonWrapper = styled.div`
  position: fixed;
  right: 30px;
  bottom: 90px;
`