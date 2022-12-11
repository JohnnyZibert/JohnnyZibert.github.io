import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <Link to={'/stack'}>
          <li>Стэк</li>
        </Link>
        <Link to={'/my-work'}>
          <li>Мои работы</li>
        </Link>
        <Link to={'/my-contact'}>
          <li>Контакты</li>
        </Link>
      </ul>
    </NavStyled>
  )
}

export default Nav

const NavStyled = styled.nav`
  display: flex;
  min-height: 10vh;
  margin: auto;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 10rem;
  background: #9a75e3;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
    color: white;
    cursor: pointer;
  }
`
