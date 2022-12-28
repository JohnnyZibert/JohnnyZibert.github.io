import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import { AnimateInfo } from '../Animation'
import { ContentContainer } from './ContentContainer'
import UserInfo from './UserInfo'
import UserPhoto from './UserPhoto'

const Profile = () => {
  return (
    <ContentContainer>
      <ProfileContainer
        variants={AnimateInfo}
        initial={'hidden'}
        animate={'show'}
      >
        <UserPhoto />
        <UserInfo />
      </ProfileContainer>
    </ContentContainer>
  )
}

export default Profile

const ProfileContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 2rem;
  width: 100%;
  @media (max-width: 813px) {
    display: block;
    padding: 0 2rem;
  }
`
