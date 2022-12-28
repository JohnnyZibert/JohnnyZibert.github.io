import React from 'react'
import styled from 'styled-components'

import Profile from './Profile'

const Home = () => {
  return (
    <ProfileStyled>
      <Profile />
    </ProfileStyled>
  )
}

export default Home

const ProfileStyled = styled.div`
  display: flex;
  justify-content: center;
`
