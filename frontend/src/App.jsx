import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UI from './pages/UI'
import Login from './pages/Dashboard/Login'
import Home from './pages/Dashboard/Home'

const App = () => {

  return (
    <>
        <BrowserRouter>
            <Routes>
                  <Route path="/" element={<UI/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path='/studentdashboard' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
