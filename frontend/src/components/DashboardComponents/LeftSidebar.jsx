import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineAvTimer } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";

const LeftSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 375) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`bg-[#1c2d48] min-w-2.5 h-[100vh] transition-all duration-300 ${isSidebarOpen ? "w-60" : 'w-[70px]'}`}
      >
        <div
          id="title"
          className="flex  justify-center items-center mt-10 shrink-0"
        >
          <p
            className={`${isSidebarOpen ? "text-white text-3xl font-bold text-center " : "hidden  transition-all duration-300"}`}
          >
            TND
          </p>
        </div>
        <ul className="flex flex-col px-5 mt-10">
          {/* Menu Item 1 */}
          <div className="flex items-center text-white w-full p-3 hover:text-[#4489e4]">
            <RiHome2Line size={"20px"} scale={"50px"} />
            <Link className={`ml-2 transition-all duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>
              Home
            </Link>
          </div>

          {/* Menu Item 2 */}
          <div className="flex items-center text-white w-full p-3 hover:text-[#4489e4]">

            <MdOutlineAvTimer className="fs-30" />

            <Link className={`ml-2 transition-all duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>
              My Request
            </Link>
          </div>

          {/* Menu Item 3 */}
          <div className="flex items-center text-white w-full p-3 hover:text-[#4489e4]">
            <FiBook size={20} />
            <Link className={`ml-2 transition-all duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>
              Initiate Application
            </Link>
          </div>
          <div className="flex items-center text-white w-full p-3 hover:text-[#4489e4]">
            <MdOutlinePerson size={20} />
            <Link className={`ml-2 transition-all duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>
              My Profile
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default LeftSidebar;
