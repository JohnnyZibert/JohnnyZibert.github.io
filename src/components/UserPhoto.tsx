import React from 'react'
import styled from 'styled-components'

import userPhoto from '../assets/images/IMG_5634.jpg'

const UserPhoto = () => {
  return (
    <UserStyled>
      <Image src={userPhoto} alt="userPhoto" />
      <h2>Згирдан Евгений</h2>
      <h2>26 лет</h2>
      <h2>ReactJS Developer</h2>
    </UserStyled>
  )
}

export default UserPhoto

const UserStyled = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  h2 {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #332b1a;
    margin-bottom: 1rem;
  }
`
const Image = styled.img`
  width: 70%;
  height: 60vh;
  object-fit: cover;
  border-radius: 2rem;
  overflow: hidden;
  margin-bottom: 2rem;
`
