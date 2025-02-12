import React from 'react'

const Announcements = () => {
  return (
    <>
      <section className="card-container grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 px-6 py-6 fade-on-scroll">
        <div className="card bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="w-full h-64">
            <img src="./Images/AnnouncementImages/anouncement1.jpeg" className="w-full h-full object-cover rounded-md" alt="Workshop Schedule" />
          </div>
          <h3 className="text-xl font-semibold text-[#1A2942] mt-4">Workshop Schedule</h3>
          <p className="text-gray-600 mt-2">Check out the upcoming workshops to enhance your skills.</p>
        </div>

        <div className="card bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="w-full h-64">
            <img src="./Images/AnnouncementImages/anouncement2.jpeg" className="w-full h-full object-cover rounded-md" alt="Project of the Month" />
          </div>
          <h3 className="text-xl font-semibold text-[#1A2942] mt-4">Project of the Month</h3>
          <p className="text-gray-600 mt-2">Discover the most innovative project created this month.</p>
        </div>

        <div className="card bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="w-full h-64">
            <img src="./Images/AnnouncementImages/anouncement3.jpg" className="w-full h-full object-cover rounded-md" alt="Convocation" />
          </div>
          <h3 className="text-xl font-semibold text-[#1A2942] mt-4">Convocation</h3>
          <p className="text-gray-600 mt-2">Convocation is a ceremonial event held by educational institutions to celebrate students' achievements.</p>
        </div>

        <div className="card bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="w-full h-64">
            <img src="./Images/AnnouncementImages/anouncement4.jpg" className="w-full h-full object-cover rounded-md" alt="Technology Camp" />
          </div>
          <h3 className="text-xl font-semibold text-[#1A2942] mt-4">Technology Camp</h3>
          <p className="text-gray-600 mt-2">A technology camp provides hands-on learning in various fields of technology.</p>
        </div>
      </section>
    </>
  )
}

export default Announcements
