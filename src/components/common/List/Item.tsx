import styled from 'styled-components'
import { Icon, ShapeType, SizeType } from '@/components/common/Icon'
import { COLORS } from '@/constants/Styles'

interface Props {
  name: string
  imageSrc: string
  iconShape: ShapeType
  iconSize: SizeType
}

export const Item = ({ name, imageSrc, iconShape, iconSize }: Props) => {
  return (
    <Wrapper>
      <Icon src={imageSrc} alt={name} shape={iconShape} size={iconSize} />
      <Span>{name}</Span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${COLORS.GRAY[300]};
  padding: 16px;
`

const Span = styled.span`
  margin-left: 16px;
  font-weight: 600;
`