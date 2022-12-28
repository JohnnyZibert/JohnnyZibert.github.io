import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  children: ReactNode
}

export const ContentContainer: FC<IProps> = ({ children }) => {
  return <ContentContainerStyled>{children}</ContentContainerStyled>
}

const ContentContainerStyled = styled.div`
  max-width: 1200px;
  width: 100%;
  @media (max-width: 1200px) {
    height: 100%;
    margin: auto;
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 780px) {
  }
  @media (max-width: 450px) {
  }
  @media (max-width: 375px) {
  }
`
