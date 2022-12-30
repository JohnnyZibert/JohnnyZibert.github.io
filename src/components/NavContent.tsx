import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { setCurrentSection } from '../store/commonSlice/selectedTitleNav'
import { RootState, useAppDispatch } from '../store/Store'
import { ToggleLanguage } from './ToggleLanguage'

export const NavContent = React.memo(() => {
  const dispatch = useAppDispatch()

  const { pathname } = useLocation()

  const navigate = useNavigate()

  const { t } = useTranslation(['translation'])
  const { navInfo } = useSelector((state: RootState) => state.infoNav)

  const onSelectCategory = React.useCallback(
    (id: string) => {
      navigate(`${id}`)
      const selectedTitle = navInfo.map((selected) => {
        if (selected.link === id) {
          return {
            ...selected,
            active: true,
          }
        } else {
          return {
            ...selected,
            active: false,
          }
        }
      })
      dispatch(setCurrentSection(selectedTitle))
    },
    [dispatch, navigate]
  )

  return (
    <NavStyled>
      <ul>
        {navInfo.map((itemTitle) => (
          <li
            onClick={() => onSelectCategory(`${itemTitle.link}`)}
            style={
              itemTitle.link === pathname
                ? { background: '#23d997', color: 'white' }
                : { background: 'white' }
            }
          >
            {t(`${itemTitle.title}`)}
          </li>
        ))}
      </ul>
      <ToggleLanguage />
    </NavStyled>
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
  width: 100%;

  @media (max-width: 930px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 812px) {
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column-reverse;
    left: 0;
    min-height: 110vh;
    z-index: 2;
    width: 200px;
  }
  @media (max-width: 500px) {
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column-reverse;
    left: 0;
    min-height: 110vh;
    z-index: 2;
  }

  a {
    color: black;
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    @media (max-width: 813px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  li {
    padding: 0.5rem 2rem;
    cursor: pointer;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    font-weight: lighter;
    transition: 0.5s ease-in-out;
    margin: 0 0.7rem;
    &:hover {
      color: #23d997;
      transition: 0.5s;
      scale: 1.05;
    }
    @media (max-width: 813px) {
      margin: 1rem 0;
    }
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
    text-align: center;
    font-size: 1.25rem;
  }
`
