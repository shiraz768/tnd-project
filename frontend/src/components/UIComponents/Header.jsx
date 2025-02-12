import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="bg-[#1A2942] text-white py-4 px-6 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50 shadow-md">
        <a href="" className="flex items-center mb-4 sm:mb-0">
          <img src="./Images/aptech-logo.png" className="w-16 sm:w-20 fade-on-scroll" alt="" />
        </a>
        <span className="font-bold text-lg sm:text-xl text-center sm:text-left fade-on-scroll">
          Project Department - Aptech SFC
        </span>
        <Link to={"/login"} className='bg-white text-[#1A2942] px-4 py-2 text-sm font-medium rounded-lg shadow-md hover:bg-gray-200 transition duration-300 fade-on-scroll mt-4 sm:mt-0' >
          Write Application
        </Link>
      </header>
    </>
  )
}

export default Header
