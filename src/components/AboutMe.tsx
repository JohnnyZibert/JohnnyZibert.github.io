import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { AnimateInfo } from '../Animation'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <AboutMeStyled variants={AnimateInfo} initial={'hidden'} animate={'show'}>
      <h2>{t('')}</h2>
      <h2>{t('Обо мне')}:</h2>
      <ul>
        <li>{t('Любознательный')}</li>
        <li>{t('Люблю осваивать новые технологии')}</li>
        <li>{t('Имею высшее образование')}</li>
        <li>{t('Хочу быть полезен и вносить вклад в общее дело')}</li>
        <li>{t('Постоянно стремлюсь к улучшению качества написания кода')}</li>
        <li>{t('Коммуникабелен и тактичен при взаимодействии с коллегами')}</li>
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
    font-weight: lighter;
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
  }
`
