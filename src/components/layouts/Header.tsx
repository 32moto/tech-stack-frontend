import { Link } from '@/components/common/Link'
import styled from 'styled-components'

export const Header = () => {
  return (
    <StyledHeader>
      <Link href='/'>
        <H1>Tech Stack</H1>
      </Link>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 21px 27px 9px;
`

const H1 = styled.h1`
  font-size: ${(props) => props.theme.fonts.size[24]};
`