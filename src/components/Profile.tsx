import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import { AnimateInfo } from '../Animation'
import UserInfo from './UserInfo'
import UserPhoto from './UserPhoto'

const Profile = () => {
  return (
    <ProfileContainer
      variants={AnimateInfo}
      initial={'hidden'}
      animate={'show'}
    >
      <UserPhoto />
      <UserInfo />
    </ProfileContainer>
  )
}

export default Profile

const ProfileContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2rem;
`
