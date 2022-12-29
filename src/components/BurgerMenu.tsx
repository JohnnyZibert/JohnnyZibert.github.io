import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import styled from 'styled-components'

import { OpenBurger } from '../Animation'
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
    <div>
      <BurgerMenuStyled>
        <FontAwesomeIcon icon={faBars} onClick={handleVisibleNav} size={'2x'} />
      </BurgerMenuStyled>
      {visibleNav && (
        <NavContentStyled
          variants={OpenBurger}
          initial={'hidden'}
          animate={'show'}
          exit={'exit'}
        >
          <NavContent />
        </NavContentStyled>
      )}
    </div>
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
const NavContentStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
  @media (min-width: 813px) {
    display: none;
  }
`
