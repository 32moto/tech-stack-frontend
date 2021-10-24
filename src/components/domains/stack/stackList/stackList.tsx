import styled from 'styled-components'
// import component
import { StackListItem } from "@/components/domains/stack/stackListItem/stackListItem";
// import types
import { StackType } from "@/types/stack";


interface Props {
  stacks: StackType[]
}

const StackList = ({stacks}: Props) => {

  return (
    <Container>
      <Ul>
        {stacks.map(stack => (
          <Li key={stack.id}>
            <StackListItem stack={stack}/>
          </Li>
        ))}
      </Ul>
    </Container>
  )
}

export default StackList

const Container = styled.div`
  margin-top: 16px;
`

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Li = styled.li`
  margin-bottom: 10px;
  width: 20%;
`
