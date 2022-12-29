import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import i18n from '../i18n'
import { setCurrentLanguage } from '../store/commonSlice/toggleLanguageSlice'
import { RootState, useAppDispatch } from '../store/Store'

export const ToggleLanguage = memo(() => {
  const dispatch = useAppDispatch()
  const { currentLanguage } = useSelector(
    (state: RootState) => state.currentLanguage
  )

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng)
    if (lng === 'ru') {
      dispatch(setCurrentLanguage({ ru: true, en: false }))
    } else {
      dispatch(setCurrentLanguage({ ru: false, en: true }))
    }
  }
  return (
    <ToggleContainer>
      <Language>
        <div
          onClick={() => changeLanguage('ru')}
          style={
            currentLanguage.ru
              ? { background: '#23d997', color: 'white' }
              : { background: 'white' }
          }
        >
          RU
        </div>
        <div
          onClick={() => changeLanguage('en')}
          style={
            currentLanguage.en
              ? { background: '#23d997', color: 'white' }
              : { background: 'white' }
          }
        >
          EN
        </div>
      </Language>
    </ToggleContainer>
  )
})

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 520px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
    width: 100%;
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
    transition: 0.5s ease-in-out;
    &:hover {
      color: #23d997;
      transition: 0.5s;
      scale: 1.1;
    }
    @media (max-width: 812px) {
      margin-top: 0.5rem;
    }
    @media (max-width: 520px) {
      margin-right: 0;
      font-size: 1rem;
      margin-top: 0.3rem;
    }
  }
  @media (max-width: 930px) {
    margin-left: 1rem;
  }
`
