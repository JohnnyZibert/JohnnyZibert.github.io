import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { RootState } from '../store/Store'
import MyLoader from '../UI/Sceleton'
import { getAge } from '../utils/getAge'

const UserPhoto: FC = () => {
  const { photos, isLoading } = useSelector((state: RootState) => state.photos)

  const [currentPhotos, setCurrentPhotos] = useState(() => photos[0])

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
          <MyLoader />
        ) : (
          <Image src={currentPhotos.imgUrl} alt="userPhoto" />
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
  width: 50%;
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
`
const Image = styled.img`
  height: 60vh;
  object-fit: cover;
  border-radius: 2rem;
  overflow: hidden;
  margin: 2rem 2rem 1rem 2rem;
  width: 300px;
  cursor: pointer;
`
const Age = styled.div`
  display: flex;
  flex-direction: row;
`
const Photo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    scale: 1.2;
    transition: 0.5s;
  }
`

const AngelIcon = styled(FontAwesomeIcon)`
  color: gray;
  cursor: pointer;
`
