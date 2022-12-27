import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import { AnimateInfo } from '../Animation'
import { getIconsRequest } from '../store/getIconsContact/getIconsRequest'
import { selectorContactIcons } from '../store/getIconsContact/Selector'
import { useAppDispatch } from '../store/Store'
import { IContactIcon } from '../types'
import LinkBlock from './Link'

const MyContacts = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getIconsRequest())
  }, [dispatch])
  const [t] = useTranslation('translation')
  const { contactIcons } = useSelector(selectorContactIcons())

  return (
    <ContactContainer
      variants={AnimateInfo}
      initial={'hidden'}
      animate={'show'}
    >
      <h1>{t('title contact')}</h1>
      {contactIcons.map((icon: IContactIcon) => (
        <>
          <LinkBlock
            link={icon.link}
            linkName={t(`${icon.linkName}`)}
            image={icon.imgUrl}
            key={`${uuidv4()}${icon.imgUrl}`}
          />
        </>
      ))}
    </ContactContainer>
  )
}

export default MyContacts

const ContactContainer = styled(motion.div)`
  background: #dad8d8;
  border-radius: 2rem;
  overflow: hidden;
  padding: 2rem;
  margin: 2rem;

  h1 {
    text-align: center;
    padding-bottom: 3rem;
  }

  ul {
    list-style: none;

    li {
      padding-bottom: 1.5rem;
      &:hover {
        scale: 1.05;
        transition: 0.5s;
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
