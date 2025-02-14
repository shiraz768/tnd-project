import React, { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const TopNavbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [theme, setTheme] = useState(true);

  const handleToggle = () => {
    setTheme(!theme);
  };

  const changeMode = () => {
    if (theme) {
      document.body.style.background = "#fff";
      document.body.classList.remove("dark");
    } else {
      document.body.style.background = "#333";
      document.body.classList.add("dark");
    }
  };

  useEffect(() => {
    changeMode();
  }, [theme]);

  return (
    <nav className="w-full flex p-3 justify-between shadow-md transition-colors duration-300" >
      <div
        id="toggle"
        className="p-2 cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={toggleSidebar}
      >
        <RxHamburgerMenu
          size={25}
          className={`${theme ? "transform hover:text-[#1c2d48]  text-black transition-transform duration-300" : "text-white"} ${isSidebarOpen ? "rotate-0" : "rotate-90"}`}
        />

      </div>
<div className={`${theme? "text-3xl text-center font-bold" : "text-3xl text-white font-bold"}`}>
  TND Dashboard 
</div>
      <div className="p-2 cursor-pointer relative w-8 h-8" onClick={handleToggle}>
        <div className="relative w-full h-full">
          {theme ? (
            <MdOutlineLightMode
              size={25}
              className={`${theme ? "absolute transform hover:text-sky-800  transition-all duration-300" : "text-black "} `}
            />
          ) : (
            <MdOutlineDarkMode
              size={25}
              className={`${theme ? "absolute transform hover:text-[#1c2d48] transition-all duration-300" : "text-white hover:text-sky-800"}  `}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
