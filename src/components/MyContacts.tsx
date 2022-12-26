import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { AnimateInfo } from '../Animation'
import { images } from '../assets/images/images'
import LinkBlock from './Link'

const MyContacts = () => {
  const [t] = useTranslation('translation')
  return (
    <ContactContainer
      variants={AnimateInfo}
      initial={'hidden'}
      animate={'show'}
    >
      <h1>{t('title contact')}</h1>
      <LinkBlock
        link={'https://t.me/jenya18737'}
        linkName={t('telegram title')}
        image={images.telegram}
      />
      <LinkBlock
        link={'https://vk.com/id140410473'}
        linkName={t('vk title')}
        image={images.vk}
      />
      <LinkBlock
        link={'https://www.instagram.com/zgirdan_zhenay/'}
        linkName={t('instagram title')}
        image={images.instagram}
      />
      <LinkBlock
        link={'tel:+79257377684'}
        linkName={'+79257377684'}
        image={images.phone}
      />
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
        scale: 1.1;
        transition: 0.5s;
      }
    }

    a {
      color: #2d2323;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }
`
