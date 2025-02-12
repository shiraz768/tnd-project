import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UI from './pages/UI'
import Login from './pages/Dashboard/Login'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                  <Route path="/" element={<UI/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
