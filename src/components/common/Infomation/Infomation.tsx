import styled from "styled-components"
import { InfomationIcon, ShapeType } from "@/components/common/Icon"

interface Props {
  icon: string
  name: string
  iconShape: ShapeType
}

const isShare = true

export const Infomation = ({icon, name} : Props) => {
  return (
    <Container>
      <InfomationIcon src={icon} alt={name} shape={'circle'} size='m' />
      <AboutWrapper>
        <H2>{name}</H2>
        {isShare && (
          <ShareWrapper>
            <p>twitter</p>
            <p>github</p>
          </ShareWrapper>
        )}
      </AboutWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 55px 0;
`

const AboutWrapper = styled.div`
  margin-left: 30px;
`

const H2 = styled.h2`
  font-size: ${({theme}) => theme.fonts.size[24]};
`

const ShareWrapper = styled.div`
  display: flex;
  margin-top: 8px;
`