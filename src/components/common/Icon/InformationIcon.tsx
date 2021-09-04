import styled from "styled-components"
import { getIconSize, ShapeType, SizeType } from ".";

interface Props {
  src: string
  alt: string
  shape: ShapeType
  size: SizeType
}

export const InformationIcon = ({src, alt, shape, size}: Props) => {
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