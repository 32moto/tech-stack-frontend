import styled from 'styled-components'
import { Icon, ShapeType, SizeType } from '@/components/common/Icon'
import { FONT_SIZES } from '@/constants/Styles'

interface Props {
  name: string
  imageSrc: string
  iconShape: ShapeType
  iconSize: SizeType
}

export const IconTextItem = ({ name, imageSrc, iconShape, iconSize }: Props) => {
  return (
    <Wrapper>
      <Icon src={imageSrc} alt={name} shape={iconShape} size={iconSize} />
      <Span>{name}</Span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Span = styled.span`
  margin-top: 8px;
  font-size: ${FONT_SIZES.BASE_FONT_SIZE};
`