import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import { AnimateInfo, line } from '../Animation'

const MyWork = () => {
  return (
    <MyWorkStyled variants={AnimateInfo} initial={'hidden'} animate={'show'}>
      <h1>Мои работы</h1>
      <ul>
        <li>
          <a
            href="https://github.com/JohnnyZibert/photo-app"
            target="_blank"
            rel="noreferrer"
          >
            Сайт фотоагенства
          </a>
          <Line variants={line} initial="hidden" animate="show"></Line>
        </li>
        <li>
          <a
            href="https://github.com/JohnnyZibert/games-shope-app"
            target="_blank"
            rel="noreferrer"
          >
            Рейтинг игр
          </a>
          <Line variants={line} initial="hidden" animate="show"></Line>
        </li>
        <li>
          <a
            href="https://github.com/JohnnyZibert/music-player"
            target="_blank"
            rel="noreferrer"
          >
            Аудиоплеер
          </a>
          <Line variants={line} initial="hidden" animate="show"></Line>
        </li>
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
  margin: 2rem;

  h1 {
    text-align: center;
    padding-bottom: 3rem;
  }

  ul {
    list-style: none;

    li {
      padding-bottom: 3rem;
    }

    a {
      color: #2d2323;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }
`
export const Line = styled(motion.div)`
  background: #23d997;
  height: 0.5rem;
`
