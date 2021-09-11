import styled from "styled-components"
import { Skeleton } from '@/components/common/Skeleton'
import { ShapeType } from "@/components/common/Icon"
import { MarginPaddingWrapper } from "../Wrapper"

interface Props {
  iconShape: ShapeType
  isShare: boolean
}

export const InformationSkeleton = ({iconShape, isShare}: Props) => {
  return (
    <Container>
      <Skeleton width='75px' height='75px' borderRadius={iconShape === 'circle' ?  '50%': '8px'} />
      <AboutWrapper>
        <Skeleton width='180px' height='20px' borderRadius='8px' />
        { isShare && (
          <MarginPaddingWrapper marginTop={16}>
            <Skeleton width='90px' height='20px' borderRadius='8px' />
          </MarginPaddingWrapper>
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