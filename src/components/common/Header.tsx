import styled from 'styled-components'
// import constants
import { COLORS, FONT_SIZES } from "@/constants/Styles";

const Header = () => {
  return  (
    <Container>
      <P>Teck Stack</P>
    </Container>
  )
}

export default Header

const Container = styled.div`
`

const P = styled.p`
  margin: 0;
  padding 20px 0 0 25px;
  height: 60px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: ${COLORS.TEXT_COLOR1};
  font-size: ${FONT_SIZES.FS_24};
`