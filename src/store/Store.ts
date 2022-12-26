import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import getPhotosReducer from '../store/getPhotos/getPhotosSlice'

export const store = configureStore({
  reducer: {
    photos: getPhotosReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
