import React from 'react'
import About from '../components/UIComponents/About'
import Contact from '../components/UIComponents/Contact'
import Footer from '../components/UIComponents/Footer'
import Header from '../components/UIComponents/Header'
import Slider from '../components/UIComponents/Slider'
import Announcements from '../components/UIComponents/Announcements'

const UI = () => {
  return (
    <>
          <Header/>
          <Slider/>
          <Announcements/>
          <About/>
          <Contact/>
          <Footer/>
    </>
  )
}

export default UI
