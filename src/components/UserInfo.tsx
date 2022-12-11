import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { DataUser } from '../data'
import { IMyStack } from '../types'
import MyStack from './MyStack'

const UserInfo = () => {
  const location = useLocation()
  const path = location.pathname
  return (
    <InfoContainer>
      <h2>Здравствуте, здесь вы можете узнать обо мне побольше</h2>
      <h2>Занимаю разработкой на ReactJS 1,2года.</h2>
      <h3> Стэк:</h3>
      {path === '/stack' && (
        <MyStackContainer>
          {DataUser.map((stack: IMyStack) => (
            <MyStack name={stack.name} key={stack.id} image={stack.image} />
          ))}
        </MyStackContainer>
      )}
    </InfoContainer>
  )
}

export default UserInfo

const InfoContainer = styled.div``

const MyStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  background: #a8b9bb;
  border-radius: 2rem;
  overflow: hidden;
  max-width: 80%;
  justify-content: center;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
`
