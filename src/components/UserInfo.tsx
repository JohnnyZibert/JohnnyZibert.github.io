import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { AnimateInfo } from '../Animation'
import { getStackIconsRequest } from '../store/getStackIcons/getStackIconsRequest'
import { selectorStackIcons } from '../store/getStackIcons/Selector'
import { useAppDispatch } from '../store/Store'
import { IStackIcons } from '../types'
import AboutMe from './AboutMe'
import MyContacts from './MyContacts'
import MyStack from './MyStack'
import MyWork from './MyWork'

const UserInfo = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getStackIconsRequest())
  }, [dispatch])

  const { stackIcons } = useSelector(selectorStackIcons())

  const location = useLocation()

  const path = location.pathname

  const { t } = useTranslation()

  return (
    <InfoContainer>
      {path === '/' && <AboutMe />}
      {path === '/stack' && (
        <MyStackContainer
          variants={AnimateInfo}
          initial={'hidden'}
          animate={'show'}
        >
          <StackBlock>{t('title stack')}</StackBlock>
          <IconMap>
            {stackIcons.map((stack: IStackIcons) => (
              <MyStack key={`${stack.id}${stack.name}`} imgUrl={stack.imgUrl} />
            ))}
          </IconMap>
        </MyStackContainer>
      )}
      {path === '/my-work' && <MyWork />}
      {path === '/my-contact' && <MyContacts />}
    </InfoContainer>
  )
}

export default UserInfo

const InfoContainer = styled.div`
  width: 100%;
  @media (max-width: 817px) {
    max-width: 100%;
  } ;
`
const StackBlock = styled.h1`
  text-align: center;
`
const MyStackContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  padding: 2.7rem 1rem;
  background: #dad8d8;
  border-radius: 2rem;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
  @media (max-width: 730px) {
    margin: 1rem 0;
  } ;
`
const IconMap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
