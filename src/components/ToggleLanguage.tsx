import React, { memo, useState } from 'react'
import styled from 'styled-components'

import i18n from '../i18n'

interface IActiveLanguage {
  ru: boolean
  en: boolean
}

export const ToggleLanguage = memo(() => {
  const [activeLanguage, setActiveLanguage] = useState<IActiveLanguage>({
    ru: true,
    en: false,
  })

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng)
    if (lng === 'ru') {
      setActiveLanguage((prevState) => {
        return { ...prevState, ru: true, en: false }
      })
    } else {
      setActiveLanguage((prevState) => {
        return { ...prevState, ru: false, en: true }
      })
    }
  }
  return (
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
  )
})

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
    &:hover {
      color: #23d997;
      transition: 0.5s;
    }
  }
  @media (max-width: 930px) {
    margin-left: 1rem;
  }
`
