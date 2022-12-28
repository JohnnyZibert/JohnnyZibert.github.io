import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { AnimateInfo } from '../Animation'
import Work from './Work'

const MyWork = () => {
  const { t } = useTranslation()
  const works = [
    { url: 'https://github.com/JohnnyZibert/photo-app', title: 'photo agency' },
    {
      url: 'https://github.com/JohnnyZibert/games-shope-app',
      title: 'rating games',
    },
    {
      url: 'https://github.com/JohnnyZibert/music-player',
      title: 'audio player',
    },
  ]
  return (
    <MyWorkStyled variants={AnimateInfo} initial={'hidden'} animate={'show'}>
      <h1>{t('title work')}</h1>
      <ul>
        {works.map((work) => (
          <Work key={work.url} url={work.url} title={work.title} />
        ))}
      </ul>
    </MyWorkStyled>
  )
}

export default MyWork

const MyWorkStyled = styled(motion.div)`
  padding: 3rem;
  background: #dad8d8;
  border-radius: 2rem;
  overflow: hidden;

  h1 {
    text-align: center;
    padding-bottom: 3rem;
  }

  ul {
    list-style: none;

    li {
      padding-bottom: 3rem;
      &:hover {
        scale: 1.1;
        transition: 0.5s;
      }
      @media (max-width: 490px) {
        text-align: center;
      }
    }

    a {
      color: #2d2323;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 490px) {
    margin: 1rem 0;
  }
`
export const Line = styled(motion.div)`
  background: #23d997;
  height: 0.5rem;
`
