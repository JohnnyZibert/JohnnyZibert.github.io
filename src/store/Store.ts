import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import getPhotosReducer from '../store/getPhotos/getPhotosSlice'
import getStackIconsReducer from '../store/getStackIcons/getStackIconsSlice'
import infoNavReducer from './commonSlice/selectedTitleNav'
import currentLanguageReducer from './commonSlice/toggleLanguageSlice'
import getIconsReducer from './getIconsContact/getIconsSlice'

export const store = configureStore({
  reducer: {
    photos: getPhotosReducer,
    icons: getIconsReducer,
    stackIcons: getStackIconsReducer,
    currentLanguage: currentLanguageReducer,
    infoNav: infoNavReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
