import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { selectorPhotos } from '../store/getPhotos/Selector'
import { IPhoto } from '../types'
import SkeletonIcon from '../UI/Skeleton'
import { getAge } from '../utils/getAge'

const UserPhoto: FC = () => {
  const { photos, isLoading } = useSelector(selectorPhotos())

  const [currentPhotos, setCurrentPhotos] = useState<IPhoto>(() => photos[0])

  useEffect(() => setCurrentPhotos(() => photos[0]), [photos])

  const handleSkipTrack = async (direction: string) => {
    const currentPhotoIndex = photos.findIndex(
      (photo) => photo.id === currentPhotos.id
    )
    if (direction === 'skip-forward') {
      await setCurrentPhotos(photos[(currentPhotoIndex + 1) % photos.length])
    }
    if (direction === 'skip-back') {
      if ((currentPhotoIndex - 1) % photos.length === -1) {
        await setCurrentPhotos(photos[photos.length - 1])
        return
      }
      await setCurrentPhotos(photos[(currentPhotoIndex - 1) % photos.length])
    }
  }
  const { t } = useTranslation()
  return (
    <UserStyled>
      <Photo>
        <AngelIcon
          icon={faAngleLeft}
          onClick={() => handleSkipTrack('skip-forward')}
          size={'2x'}
        />
        {isLoading ? (
          <SkeletonIcon width={300} height={450} />
        ) : (
          <PhotoContainer>
            <Image src={currentPhotos.imgUrl} alt="userPhoto" />
          </PhotoContainer>
        )}
        <AngelIcon
          icon={faAngleRight}
          onClick={() => handleSkipTrack('skip-back')}
          size={'2x'}
        />
      </Photo>
      <h2>{t('My name')}</h2>
      <Age>
        <h2>
          {getAge()} {t('my age')}
        </h2>
      </Age>
      <h2>{t('my speciality')}</h2>
    </UserStyled>
  )
}

export default UserPhoto

const UserStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  h2 {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #332b1a;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 817px) {
    width: 100%;
    h2 {
      text-align: center;
    }
  } ;
`
const PhotoContainer = styled.div`
  height: 400px;
  width: 300px;
  img {
    object-fit: cover;
    transition: 0.5s ease-in-out;
    &:hover {
      scale: 1.05;
    }
  }
  @media (max-width: 500px) {
    height: 350px;
    width: 270px;
    transition: 0.5s ease-in-out;
    img {
      object-fit: cover;
      &:hover {
        scale: 0.9;
      }
    }
  }
`
const Image = styled.img`
  border-radius: 2rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;

  @media (max-width: 520px) {
    scale: 0.8;
    margin: 0;
    img {
      transition: 0.5s ease-in-out;
      &:hover {
        scale: 1;
      }
    }
  }
`
const Age = styled.div`
  display: flex;
  flex-direction: row;
`
const Photo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  @media (max-width: 520px) {
    transition: 0.5s ease-in-out;
    &:hover {
      scale: 1;
    }
  }
`

const AngelIcon = styled(FontAwesomeIcon)`
  color: gray;
  cursor: pointer;
  margin: 0 1rem;
  transition: 0.5s ease-in-out;
  &:hover {
    scale: 1.2;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 520px) {
    scale: 0.8;
    margin: 0;
  }
`
