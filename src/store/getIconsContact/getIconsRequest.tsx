import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getIconsRequest = createAsyncThunk(
  'getIconsSlice/getIconsRequest',
  async () => {
    const contactIcons = await axios.get(
      'https://639f53cb5eb8889197fa5448.mockapi.io/icons'
    )
    return {
      contactIcons: contactIcons.data,
    }
  }
)
