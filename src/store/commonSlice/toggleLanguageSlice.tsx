import { createSlice } from '@reduxjs/toolkit'

interface IActiveLanguage {
  currentLanguage: {
    ru: boolean
    en: boolean
  }
}

const initialState: IActiveLanguage = {
  currentLanguage: {
    ru: true,
    en: false,
  },
}

export const toggleLanguageSlice = createSlice({
  name: 'toggleLanguageSlice',
  initialState,
  reducers: {
    setCurrentLanguage: (state, { payload }) => {
      state.currentLanguage = payload
    },
  },
})

export const { setCurrentLanguage } = toggleLanguageSlice.actions

export default toggleLanguageSlice.reducer
