import styled from "styled-components"

type ShapeType = 'circle' | 'rouded'
type SizeType = 's' | 'm' | 'l'

interface Props {
  src: string
  alt: string
  shape: ShapeType
  size: SizeType
}

const getIconSize = (size: SizeType) => {
  switch(size) {
    case 's':
      return 45;
    case 'm':
      return 75;
    case 'm':
      return 105;
    default:
      return 75;
  }
}

export const InfomationIcon = ({src, alt, shape, size}: Props) => {
  const imageSize = getIconSize(size)
  return (
    <Img src={src} alt={alt} shape={shape} size={imageSize} />
  )
}

const Img = styled.img<{ shape: ShapeType, size: number }>`
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  border-radius: ${({shape}) => shape === 'circle' ? '50%' : '10px'};
  padding: 5px;
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
`