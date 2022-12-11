import React, { FC } from 'react'
import styled from 'styled-components'

import { IMyStack } from '../types'

const MyStack: FC<IMyStack> = ({ image }) => {
  return (
    <IconWrapper>
      <img src={image} alt="icon" />
    </IconWrapper>
  )
}

export default MyStack

const IconWrapper = styled.div`
  display: block;
  margin: 2rem;
  img {
    border-radius: 0.5rem;
  }
`
