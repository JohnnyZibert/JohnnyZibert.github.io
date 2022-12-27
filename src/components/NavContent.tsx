import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ToggleLanguage } from './ToggleLanguage'

interface ITitle {
  title: string
  active: boolean
  id: number
  link: string
}

export const NavContent = React.memo(() => {
  const { t } = useTranslation(['translation'])
  const navInfo = [
    { title: 'about me title', active: false, id: 1, link: '/' },
    { title: 'title stack', active: false, id: 2, link: '/stack' },
    { title: 'title work', active: false, id: 3, link: '/my-work' },
    { title: 'title contact', active: false, id: 4, link: '/my-contact' },
  ]
  const [currentTitle, setCurrentTitle] = useState<ITitle[]>(navInfo)

  const handleSelectSection = (id: number) => {
    const selectedTitle = currentTitle.map((selected) => {
      selected.id === id ? (selected.active = true) : (selected.active = false)
      return selected
    })
    setCurrentTitle(selectedTitle)
  }
  return (
    <>
      <NavStyled>
        <ul>
          {currentTitle.map((itemTitle) => (
            <Link to={`${itemTitle.link}`} key={itemTitle.id}>
              <li
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
        <ToggleLanguage />
      </NavStyled>
    </>
  )
})

const NavStyled = styled.div`
  display: flex;
  min-height: 10vh;
  align-items: center;
  padding: 1rem 4rem;
  position: sticky;
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
    @media (max-width: 813px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
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
    @media (max-width: 400px) {
      padding: 0.5rem 1rem;
      text-align: center;
    }
  }
  @media (max-width: 930px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 813px) {
    justify-content: flex-start;
    flex-direction: column-reverse;
  }
`
