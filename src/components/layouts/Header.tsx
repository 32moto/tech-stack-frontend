import styled from 'styled-components'
// constants
import { FONT_SIZES } from '@/constants/Styles'
// common
import { Link } from '@/components/common/Link'
import { Icon } from '@/components/common/Icon'
// hooks
import { useCurrentUser } from '@/hooks/auth/useCurrentUser'

export const Header = () => {
  const currentUser = useCurrentUser()
  return (
    <StyledHeader>
      <Link href='/'>
        <H1>Tech Stack</H1>
      </Link>
      {currentUser && (
        <Icon src={currentUser.iconPath} alt={currentUser.name} shape='circle' size='xs' />
      )}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 21px 27px 9px;
`

const H1 = styled.h1`
  font-size: ${FONT_SIZES.FS_24};
`