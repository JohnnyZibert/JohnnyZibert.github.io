import React, { FC, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { setCurrentSection } from '../store/commonSlice/selectedTitleNav'
import { RootState, useAppDispatch } from '../store/Store'
import { ToggleLanguage } from './ToggleLanguage'
interface IProps {
  setVisibleNav?: (arg0: boolean) => void
  visibleNav?: boolean
}

export const NavContent: FC<IProps> = React.memo(
  ({ setVisibleNav, visibleNav }) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation(['translation'])
    const { navInfo } = useSelector((state: RootState) => state.infoNav)

    const handleSelectSection = React.useCallback(
      (id: number) => {
        const selectedTitle = navInfo.map((selected) => {
          if (selected.id === id) {
            return { ...selected, active: true }
          } else {
            return { ...selected, active: false }
          }
        })
        dispatch(setCurrentSection(selectedTitle))
      },
      [dispatch]
    )

    const ref = useRef()

    useEffect(() => {
      const checkIfClickedOutside = (e: { target: EventTarget | null }) => {
        // @ts-ignore
        if (visibleNav && ref.current && !ref.current.contains(e.target)) {
          setVisibleNav && setVisibleNav(false)
        }
      }

      document.addEventListener('mousedown', checkIfClickedOutside)

      return () => {
        // Cleanup the event listener
        document.removeEventListener('mousedown', checkIfClickedOutside)
      }
    }, [visibleNav])

    return (
      // @ts-ignore
      <NavStyled ref={ref}>
        <ul>
          {navInfo.map((itemTitle) => (
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
    )
  }
)

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
  @media (max-width: 930px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 812px) {
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column-reverse;
    left: 0;
    width: 40%;
    transition: all 0.5s;
    min-height: 110vh;
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
    font-size: 1.5rem;
    font-weight: lighter;
    &:hover {
      color: #23d997;
      transition: 0.5s;
    }
    @media (max-width: 500px) {
      padding: 0.5rem;
      text-align: center;
      font-size: 1.25rem;
      margin: 1rem 0;
    }
  }
`
