import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGetStackIcons } from '../../types'
import { getStackIconsRequest } from './getStackIconsRequest'

type IStackAction = Omit<IGetStackIcons, 'isLoading'>

const initialState: IGetStackIcons = {
  stackIcons: [],
  isLoading: true,
}

export const getStackIconsSlice = createSlice({
  name: 'getStackIconsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStackIconsRequest.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      getStackIconsRequest.fulfilled,
      (state, { payload }: PayloadAction<IStackAction>) => {
        state.stackIcons = payload.stackIcons
        state.isLoading = false
      }
    )
    builder.addCase(getStackIconsRequest.rejected, (state) => {
      state.isLoading = true
    })
  },
})

// export const {} = getPhotosSlice.actions

export default getStackIconsSlice.reducer
