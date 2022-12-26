import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ITitle {
  title: string
  active: boolean
  id: number
  link: string
}

const Nav = () => {
  const [activeLanguage, setActiveLanguage] = useState({
    ru: true,
    en: false,
  })
  const { t, i18n } = useTranslation(['translation'])
  const navInfo = [
    { title: 'about me title', active: false, id: 1, link: '/' },
    { title: 'title stack', active: false, id: 2, link: '/stack' },
    { title: 'title work', active: false, id: 3, link: '/my-work' },
    { title: 'title contact', active: false, id: 4, link: '/my-contact' },
  ]
  const [currentTitle, setCurrentTitle] = useState<ITitle[]>(navInfo)

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng)
    if (lng === 'ru') {
      setActiveLanguage({ ru: true, en: false })
    } else {
      setActiveLanguage({ ru: false, en: true })
    }
  }
  const handleSelectSection = (id: number) => {
    const selectedTitle = currentTitle.map((selected) => {
      selected.id === id ? (selected.active = true) : (selected.active = false)
      return selected
    })
    setCurrentTitle(selectedTitle)
  }
  return (
    <NavStyled>
      <div>
        <ul>
          {currentTitle.map((itemTitle) => (
            <Link to={`${itemTitle.link}`}>
              <li
                key={itemTitle.id}
                onClick={() => handleSelectSection(itemTitle.id)}
                style={
                  itemTitle.active
                    ? { background: '#23d997', color: 'white' }
                    : { background: 'white' }
                }
              >
                {t(`${itemTitle.title}`)}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <ToggleContainer>
        <Language>
          <div
            onClick={() => changeLanguage('ru')}
            style={
              activeLanguage.ru
                ? { background: '#23d997', color: 'white' }
                : { background: 'white' }
            }
          >
            RU
          </div>
          <div
            onClick={() => changeLanguage('en')}
            style={
              activeLanguage.en
                ? { background: '#23d997', color: 'white' }
                : { background: 'white' }
            }
          >
            EN
          </div>
        </Language>
      </ToggleContainer>
    </NavStyled>
  )
}

export default Nav

const NavStyled = styled.nav`
  display: flex;
  min-height: 10vh;
  align-items: center;
  padding: 1rem 4rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid white;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  background: white;
  justify-content: flex-end;

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
      color: #23d997;
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
const Language = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  cursor: pointer;
  margin-left: 10rem;

  div {
    margin-right: 1rem;
    border-radius: 0.5rem;
    padding: 0.25rem;
    &:hover {
      color: #23d997;
      transition: 0.5s;
    }
  }
`
