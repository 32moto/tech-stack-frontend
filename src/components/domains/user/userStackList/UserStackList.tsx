import { StackType } from "@/types/user/stack"
import styled from "styled-components"
import { UserStackListItemContainer } from "../userStackListItem/UserStackListItemContainer"

interface Props {
  stacks: StackType[]
}

export const UserStackList = ({ stacks }: Props) => {
  return (
    <Ul>
      {stacks.map(stack => (
        <Li key={stack.id}>
          <UserStackListItemContainer stack={stack} />
        </Li>
      ))}
    </Ul>
  )
}

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Li = styled.li`
  margin: 0 8px 8px;
`