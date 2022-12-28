import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navInfo: [
    { title: 'about me title', active: false, id: 0, link: '/' },
    { title: 'title stack', active: false, id: 1, link: '/stack' },
    { title: 'title work', active: false, id: 2, link: '/my-work' },
    { title: 'title contact', active: false, id: 3, link: '/my-contact' },
  ],
}

export const infoNavSlice = createSlice({
  name: 'infoNavSlice',
  initialState,
  reducers: {
    setCurrentSection: (state, { payload }) => {
      state.navInfo = payload
    },
  },
})

export const { setCurrentSection } = infoNavSlice.actions

export default infoNavSlice.reducer
