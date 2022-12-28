import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import styled from 'styled-components'

import { NavContent } from './NavContent'

interface IProps {
  setVisibleNav: (arg0: boolean) => void
  visibleNav: boolean
}

export const BurgerMenu: FC<IProps> = ({ setVisibleNav, visibleNav }) => {
  const handleVisibleNav = () => {
    setVisibleNav(!visibleNav)
  }
  return (
    <>
      <BurgerMenuStyled>
        <FontAwesomeIcon icon={faBars} onClick={handleVisibleNav} size={'2x'} />
      </BurgerMenuStyled>
      {visibleNav && (
        <NavContentStyled>
          <NavContent />
        </NavContentStyled>
      )}
    </>
  )
}

export default BurgerMenu

const BurgerMenuStyled = styled.div`
  position: relative;
  display: none;
  z-index: 20;
  color: gray;
  width: 10%;
  svg {
    margin: 0.5rem;
    @media (max-width: 500px) {
      scale: 0.8;
    }
  }
  @media (max-width: 813px) {
    display: flex;
  }
`
const NavContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  @media (min-width: 813px) {
    display: none;
  }
`
