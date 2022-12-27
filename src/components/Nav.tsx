import React, { useState } from 'react'
import styled from 'styled-components'

import BurgerMenu from './BurgerMenu'
import { NavContent } from './NavContent'

export const Nav = () => {
  const [visibleNav, setVisibleNav] = useState<boolean>(false)

  return (
    <OpenBurgerStyled>
      <BurgerMenu setVisibleNav={setVisibleNav} visibleNav={visibleNav} />
      <NavContentContainer>
        <NavContent />
      </NavContentContainer>
    </OpenBurgerStyled>
  )
}
const OpenBurgerStyled = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
`

const NavContentContainer = styled.div`
  @media (max-width: 813px) {
    display: none;
  }
`
