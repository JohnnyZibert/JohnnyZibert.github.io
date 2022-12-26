import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPhotosRequest = createAsyncThunk(
  'getPhotosSlice/getPhotosRequest',
  async () => {
    const photos = await axios.get(
      'https://639f53cb5eb8889197fa5448.mockapi.io/photos'
    )
    return {
      photos: photos.data,
    }
  }
)
