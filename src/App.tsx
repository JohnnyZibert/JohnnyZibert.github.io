import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './components/GlobalStyle'
import Home from './components/Home'
import { Nav } from './components/Nav'
import { getPhotosRequest } from './store/getPhotos/getPhotosRequest'
import { useAppDispatch } from './store/Store'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPhotosRequest())
  }, [dispatch])

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        {['/stack', '/my-work', '/my-contact', '/'].map((path) => (
          <Route path={path} element={<Home />} key={path} />
        ))}
      </Routes>
    </div>
  )
}

export default App
