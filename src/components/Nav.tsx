import React from 'react'
import styled from 'styled-components'

import BurgerMenu from './BurgerMenu'
import { NavContent } from './NavContent'
import { useOutsideClick } from './OutsideClick'

export const Nav = () => {
  const { ref, setVisible, visible } = useOutsideClick(false)

  return (
    <OpenBurgerStyled ref={ref}>
      <BurgerMenu setVisibleNav={setVisible} visibleNav={visible} />
      <NavContentContainer>
        <NavContent />
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
    width: 150px;
  }
  @media (max-width: 500px) {
    width: 150px;
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
