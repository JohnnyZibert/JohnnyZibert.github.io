import React, { FC } from 'react'
import styled from 'styled-components'

import userPhoto from '../assets/images/IMG_5634.jpg'
import { getAge } from '../utils/getAge'
//
// const handleSkipTrack = async (direction: string) => {
//     const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
//     if (direction === 'skip-forward') {
//         await setCurrentSong(songs[(currentIndex + 1) % songs.length])
//         activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
//     }
//     if (direction === 'skip-back') {
//         if ((currentIndex - 1) % songs.length === -1) {
//             await setCurrentSong(songs[songs.length - 1])
//             activeLibraryHandler(songs[songs.length - 1])
//             return
//         }
//         await setCurrentSong(songs[(currentIndex - 1) % songs.length])
//         activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
//     }
// }

const UserPhoto: FC = () => {
  return (
    <UserStyled>
      <Image src={userPhoto} alt="userPhoto" />
      <h2>Згирдан Евгений</h2>
      <h2>{getAge()} лет</h2>
      <h2>ReactJS Developer</h2>
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
`
