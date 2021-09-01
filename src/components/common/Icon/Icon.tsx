import styled from "styled-components"
import { getIconSize, ShapeType, SizeType } from "./";

interface Props {
  src?: string
  alt: string
  shape: ShapeType
  size: SizeType
}

export const Icon = ({src, alt, shape, size}: Props) => {
  const imageSize = getIconSize(size)
  const iconPath = src || ''
  return (
    <Img src={iconPath} alt={alt} shape={shape} size={imageSize} />
  )
}

const Img = styled.img<{ shape: ShapeType, size: number }>`
  border-radius: ${({shape}) => shape === 'circle' ? '50%' : '10px'};
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
`