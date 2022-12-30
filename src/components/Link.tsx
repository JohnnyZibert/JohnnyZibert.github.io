import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { line } from '../Animation'
import { selectorContactIcons } from '../store/getIconsContact/Selector'
import SkeletonIconContact from '../UI/SkeletonContactIcons'
import { Line } from './MyWork'

interface IProps {
  linkName: string
  link: string
  image: string
}

const LinkBlock: FC<IProps> = ({ linkName, link, image }) => {
  const { isLoading } = useSelector(selectorContactIcons())
  return (
    <LinkContainer>
      <ul>
        <li>
          {isLoading ? <SkeletonIconContact /> : <img src={image} alt="icon" />}
          <NameLink>
            <a href={link} target="_blank" rel="noreferrer">
              {linkName}
            </a>
            <Line variants={line} initial="hidden" animate="show"></Line>
          </NameLink>
        </li>
      </ul>
    </LinkContainer>
  )
}

export default LinkBlock

const LinkContainer = styled.div`
  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    margin-right: 1rem;
  }
  li {
    display: flex;
  }
`

const NameLink = styled.div`
  width: 100%;
`
