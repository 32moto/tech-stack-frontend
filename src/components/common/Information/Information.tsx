import styled from "styled-components"
import { InformationIcon, ShapeType, SvgIcon } from "@/components/common/Icon"
import { MarginPaddingWrapper } from "../Wrapper"

interface Props {
  icon: string
  name: string
  iconShape: ShapeType
  isShare: boolean
}

export const Information = ({icon, name, iconShape, isShare} : Props) => {
  return (
    <Container>
      <InformationIcon src={icon} alt={name} shape={iconShape} size='m' />
      <AboutWrapper>
        <H2>{name}</H2>
        {isShare && (
          <ShareWrapper>
            <MarginPaddingWrapper marginRight={8} >
              <IconButton>
                <SvgIcon iconType='twitter' />
              </IconButton>
            </MarginPaddingWrapper>
            <MarginPaddingWrapper>
              <IconButton>
                <SvgIcon iconType='github' />
              </IconButton>
            </MarginPaddingWrapper>
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

const IconButton = styled.button`
  font-size: ${({theme}) => theme.fonts.size[18]};
`