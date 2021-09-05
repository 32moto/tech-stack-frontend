import styled from 'styled-components'
import { sp, pc } from '@/config/media'
import { Skeleton } from '../Skeleton'
import { MarginPaddingWrapper } from '../Wrapper'

export const SkeletonList = () => {
  return (
    <Wrapper>
      <H3>
        <Skeleton width='180px' height='20px' borderRadius='8px' />
      </H3>
      <Ul>
        {  [...Array(5)].map((_, i) => (
          <li key={i}>
            <ItemWrapper>
              <Skeleton width='45px' height='45px' borderRadius='50%' />
              <MarginPaddingWrapper marginLeft={16}>
                <Skeleton width='180px' height='20px' borderRadius='8px' />
              </MarginPaddingWrapper>
            </ItemWrapper>
          </li>
        ))}
      </Ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${sp``}
  ${pc``}
`

const H3 = styled.h3`
  display: flex;
  justify-content: center;
`

const Ul = styled.ul`
  margin-top: 8px;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #C8C8C8;
  padding: 16px;
`