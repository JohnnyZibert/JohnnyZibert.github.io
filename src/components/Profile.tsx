import React from 'react'
import styled from 'styled-components'

import UserInfo from './UserInfo'
import UserPhoto from './UserPhoto'

const Profile = () => {
  return (
    <ProfileContainer>
      <UserPhoto />
      <UserInfo />
    </ProfileContainer>
  )
}

export default Profile

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #938e8e;
  min-height: 100vh;
  padding: 2rem;
`
