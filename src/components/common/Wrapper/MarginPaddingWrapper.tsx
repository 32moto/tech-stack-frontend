import styled from 'styled-components';

interface Props {
  children: React.ReactNode
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}

export const MarginPaddingWrapper = (props: Props) => {
  const {children, ...styles} = props
  return (
    <Div {...styles} >
      { children }
    </Div>
  )
}

const Div = styled.div<{
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}>`
  margin-top: ${({ marginTop }) => marginTop && `${marginTop}px`};
  margin-right: ${({ marginRight }) => marginRight && `${marginRight}px`};
  margin-bottom: ${({ marginBottom }) => marginBottom && `${marginBottom}px`};
  margin-left: ${({ marginLeft }) => marginLeft && `${marginLeft}px`};
  padding-top: ${({ paddingTop }) => paddingTop && `${paddingTop}px`};
  padding-right: ${({ paddingRight }) => paddingRight && `${paddingRight}px`};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom && `${paddingBottom}px`};
  padding-left: ${({ paddingLeft }) => paddingLeft && `${paddingLeft}px`};
`