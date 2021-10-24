import styled from "styled-components";
import { COLORS } from "@/constants/Styles"
import { getStacks } from "@/application/stack/usecase/getStacks";

const CompanyStackModalContainer = () => {
  const { data, loading } = getStacks()
  if(loading) return <p>loading...</p>
  if(!data) return null
  
  return (
    <Container>
      <Title>新規追加</Title>
    </Container>
  )
}

export default CompanyStackModalContainer

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
