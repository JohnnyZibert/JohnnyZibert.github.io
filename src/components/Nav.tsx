import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  const { t, i18n } = useTranslation(['translation'])
  const [language, setLanguage] = useState(false)
  const [languageEN, setLanguageEN] = useState(false)
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng)
  }

  // const handleClickRU = (ru: string) => {
  //   setLanguage(true)
  //   setLanguageEN(false)
  //   changeLanguage('ru')
  // }
  //
  // const handleClickEN = (en: string) => {
  //   setLanguageEN(true)
  //   setLanguage(false)
  //   changeLanguage('en')
  // }
  const activeBackground = { background: '#23d997' }
  return (
    <NavStyled>
      <ul>
        <Link to={'/'}>
          <li>{t('about me title')}</li>
        </Link>
        <Link to={'/stack'}>
          <li>{t('title stack')}</li>
        </Link>
        <Link to={'/my-work'}>
          <li>{t('title work')}</li>
        </Link>
        <Link to={'/my-contact'}>
          <li>{t('title contact')}</li>
        </Link>
      </ul>
      <ToggleContainer>
        <span
          style={language ? activeBackground : { background: 'white' }}
          onClick={() => changeLanguage('ru')}
        >
          RU
        </span>
        <span
          style={languageEN ? activeBackground : { background: 'white' }}
          onClick={() => changeLanguage('en')}
        >
          EN
        </span>
      </ToggleContainer>
    </NavStyled>
  )
}

export default Nav

const NavStyled = styled.nav`
  display: flex;
  min-height: 10vh;
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid white;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  background: white;
  justify-content: space-around;

  a {
    color: black;
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  li {
    padding: 0.5rem 2rem;
    cursor: pointer;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: lighter;

    &:hover {
      background: #23d997;
      color: white;
      transition: 0.5s;
    }
  }
`
const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  span {
    padding: 0.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.75s;
  }
`
