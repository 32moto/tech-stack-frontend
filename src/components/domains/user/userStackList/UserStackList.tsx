import { SvgIcon } from "@/components/common/Icon"
import { COLORS, FONT_SIZES } from "@/constants/Styles"
import { StackType } from "@/types/user/stack"
import styled from "styled-components"
import { UserStackListItemContainer } from "../userStackListItem/UserStackListItemContainer"

interface Props {
  stacks: StackType[]
  isMine: boolean
}

export const UserStackList = ({ stacks, isMine }: Props) => {
  return (
    <Container>
      {isMine && (
        <EditButton onClick={() => {console.log('edit')}}>
          <SvgIcon iconType='pen' />
        </EditButton> 
      )}
      <Ul>
        {stacks.map(stack => (
          <Li key={stack.id}>
            <UserStackListItemContainer stack={stack} />
          </Li>
        ))}
      </Ul>
      <AddButtonWrapper role='button'>
        <AddButton>
          <SvgIcon iconType='plus' />
        </AddButton>
      </AddButtonWrapper>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const EditButton = styled.button`
  position: absolute;
  top: -16px;
  right: 0;
  color: ${COLORS.GRAY[500]};
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

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 1px;
  width: 60px;
  height: 60px;
  font-weight: bold;
  color: ${COLORS.GRAY[500]};
  font-size: ${FONT_SIZES.FS_20};
`