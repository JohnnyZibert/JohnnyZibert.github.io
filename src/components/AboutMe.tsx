import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { AnimateInfo } from '../Animation'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <AboutMeStyled variants={AnimateInfo} initial={'hidden'} animate={'show'}>
      <h3>{t('Hello it`s me')}</h3>
      <h2>{t('about me section')}:</h2>
      <ul>
        <li>{t('i inquisitive')}</li>
        <li>{t('medical education')}</li>
        <li>{t('I want to be useful')}</li>
        <li>{t('writing code')}</li>
        <li>{t('i is sociable and tactful')}</li>
      </ul>
    </AboutMeStyled>
  )
}

export default AboutMe

const AboutMeStyled = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 2rem;
  background: #dad8d8;
  border-radius: 2rem;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  margin: 2rem;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
  }
  h3 {
    margin-bottom: 1rem;
    font-weight: lighter;
  }
  ul {
    margin-left: 1rem;
  }
  li {
    padding: 0.5rem;
    font-size: 1.25rem;
  }
`
