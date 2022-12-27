import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IGetIcons } from '../../types'
import { getIconsRequest } from './getIconsRequest'

export type IActionIcons = Omit<IGetIcons, 'isLoading'>

const initialState: IGetIcons = {
  contactIcons: [],
  isLoading: true,
}

export const getIconsSlice = createSlice({
  name: 'getIconsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIconsRequest.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      getIconsRequest.fulfilled,
      (state, { payload }: PayloadAction<IActionIcons>) => {
        state.contactIcons = payload.contactIcons
        state.isLoading = false
      }
    )
    builder.addCase(getIconsRequest.rejected, (state) => {
      state.isLoading = true
    })
  },
})

export default getIconsSlice.reducer
