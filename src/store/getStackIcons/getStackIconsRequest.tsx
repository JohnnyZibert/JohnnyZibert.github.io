import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getStackIconsRequest = createAsyncThunk(
  'getStackIconsSlice/getStackIconsRequest',
  async () => {
    const stackIcons = await axios.get(
      'https://639f53cb5eb8889197fa5448.mockapi.io/stack'
    )
    return {
      stackIcons: stackIcons.data,
    }
  }
)
