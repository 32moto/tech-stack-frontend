import styled, { keyframes } from "styled-components"

const SkeletonAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`

export const Skeleton = styled.div<{width: string, height: string, borderRadius: string}>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  border-radius: ${({borderRadius}) => borderRadius};
  background: #C8C8C8;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, #fafafa, transparent);
    position: absolute;
    top: 0;
    left: 0;
    animation: ${SkeletonAnimation} 1.2s linear infinite;
  }
`