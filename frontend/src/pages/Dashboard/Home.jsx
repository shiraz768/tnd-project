import React, { useState } from "react";
import TopNavbar from "../../components/DashboardComponents/TopNavbar";
import LeftSidebar from "../../components/DashboardComponents/LeftSidebar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
       <div className="flex min-h-screen">
      <LeftSidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-grow">
        <TopNavbar 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </div>
    </>
  );
};

export default Home;
