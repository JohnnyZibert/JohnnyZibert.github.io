import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { line } from '../Animation'

interface IProps {
  url: string
  title: string
}

const Work: FC<IProps> = ({ url, title }) => {
  const { t } = useTranslation()
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        {t(`${title}`)}
      </a>
      <Line variants={line} initial="hidden" animate="show"></Line>
    </li>
  )
}

export default Work

export const Line = styled(motion.div)`
  background: #23d997;
  height: 0.5rem;
`
