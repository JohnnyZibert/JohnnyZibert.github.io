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
        <NavContent setVisibleNav={setVisibleNav} visibleNav={visibleNav} />
      </NavContentContainer>
    </OpenBurgerStyled>
  )
}
const OpenBurgerStyled = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  @media (max-width: 814px) {
    display: flex;
    justify-content: flex-start;
  }
`

const NavContentContainer = styled.div`
  width: 100%;
  @media (max-width: 813px) {
    display: none;
  }
`
