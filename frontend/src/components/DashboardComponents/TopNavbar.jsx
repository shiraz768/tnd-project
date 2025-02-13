import React, { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const TopNavbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [theme, setTheme] = useState(true);

  const handleToggle = () => {
    setTheme(!theme);
  };

  return (
    <nav className="w-full flex p-3 justify-between shadow-md bg-white transition-colors duration-300">
     
      <div 
        id="toggle" 
        className="p-2 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={toggleSidebar}
      >
        <RxHamburgerMenu 
          size={25} 
          className={`transform hover:text-[#1c2d48] transition-transform duration-300 ${
            isSidebarOpen ? 'rotate-90' : 'rotate-0'
          }`}
        />
      </div>

     
      <div 
        className="p-2 cursor-pointer relative w-8 h-8"
        onClick={handleToggle}
      >
        <div className="relative w-full h-full">
          <MdOutlineLightMode
            size={25}
            className={`absolute transform hover:text-[#1c2d48] transition-all duration-300 ${
              theme ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
            }`}
          />
          <MdOutlineDarkMode
            size={25}
            className={`absolute transform hover:text-[#1c2d48] transition-all duration-300 ${
              !theme ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
            }`}
          />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;