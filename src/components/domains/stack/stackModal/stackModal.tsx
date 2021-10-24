import styled from "styled-components";
import { COLORS } from "@/constants/Styles"
// import components
import StackList from "@/components/domains/stack/stackList/stackList";
// import types
import { StackType } from "@/types/stack";

interface Props {
  stacks: StackType[]
}

const StackModal = ({stacks}: Props) => {

  return (
    <Container>
      <Title>新規追加</Title>
      <StackList stacks={stacks}/>
    </Container>
  )
}

export default StackModal

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  border-radius: 8px 8px 0 0;
  height: 300px;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 4px 4px rgb(0 0 0 / 20%);
`

const Title = styled.div`
  margin: 24px 0 0 16px;
  color: ${COLORS.GRAY[500]};
`