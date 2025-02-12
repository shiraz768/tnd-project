import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UI from './pages/UI'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                  <Route path="/" element={<UI/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
