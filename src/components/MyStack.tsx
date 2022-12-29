import { motion } from 'framer-motion'
import React, { FC } from 'react'
import styled from 'styled-components'

import { lineForIcon } from '../Animation'
import { IMyStack } from '../types'

const MyStack: FC<IMyStack> = ({ imgUrl }) => {
  return (
    <IconWrapper>
      <motion.img src={imgUrl} alt="icon" />
      <Line variants={lineForIcon} initial="hidden" animate="show"></Line>
    </IconWrapper>
  )
}

export default MyStack

const IconWrapper = styled.div`
  display: block;
  margin: 1rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    scale: 1.2;
  }
  img {
    border-radius: 0.5rem;
    @media (max-width: 470px) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      scale: 0.7;
      margin: 0;
    }
  }
  @media (max-width: 470px) {
    flex-wrap: nowrap;
    margin: 0;
  }
`
export const Line = styled(motion.div)`
  background: #23d997;
  height: 0.5rem;
  @media (max-width: 470px) {
    scale: 0.7;
  }
`
