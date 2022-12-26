import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getPhotosRequest } from './getPhotosRequest'

interface IPhotos {
  photos: {
    imgUrl: string
    id: number
  }[]
}

interface IGetPhotos {
  photos: {
    imgUrl: string
    id: number
  }[]
  isLoading: boolean
}
const initialState: IGetPhotos = {
  photos: [
    {
      imgUrl: '',
      id: 0,
    },
  ],
  isLoading: true,
}

export const getPhotosSlice = createSlice({
  name: 'getPhotosSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotosRequest.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      getPhotosRequest.fulfilled,
      (state, { payload }: PayloadAction<IPhotos>) => {
        state.photos = payload.photos
        state.isLoading = false
      }
    )
    builder.addCase(getPhotosRequest.rejected, (state) => {
      state.isLoading = true
    })
  },
})

// Action creators are generated for each case reducer function
// export const {} = getPhotosSlice.actions

export default getPhotosSlice.reducer
