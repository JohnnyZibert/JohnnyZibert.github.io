import { motion } from 'framer-motion'
import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { AnimateInfo } from '../Animation'
import { DataUser } from '../data'
import { IMyStack } from '../types'
import AboutMe from './AboutMe'
import MyContacts from './MyContacts'
import MyStack from './MyStack'
import MyWork from './MyWork'

const UserInfo = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <InfoContainer>
      {path === '/' && <AboutMe />}
      {path === '/stack' && (
        <MyStackContainer
          variants={AnimateInfo}
          initial={'hidden'}
          animate={'show'}
        >
          <StackBlock>Мой стэк</StackBlock>
          <IconMap>
            {DataUser.map((stack: IMyStack) => (
              <MyStack name={stack.name} key={stack.id} image={stack.image} />
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
  max-width: 50%;
  width: 100%;
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
  margin: 2rem;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
`
const IconMap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
