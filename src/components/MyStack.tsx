import { motion } from 'framer-motion'
import React, { FC } from 'react'
import styled from 'styled-components'

import { lineForIcon } from '../Animation'
import { IMyStack } from '../types'
import { Line } from './MyWork'

const MyStack: FC<IMyStack> = ({ image }) => {
  return (
    <IconWrapper>
      <motion.img src={image} alt="icon" />
      <Line variants={lineForIcon} initial="hidden" animate="show"></Line>
    </IconWrapper>
  )
}

export default MyStack

const IconWrapper = styled.div`
  display: block;
  margin: 2rem;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.5s;
  }
  img {
    border-radius: 0.5rem;
  }
`
