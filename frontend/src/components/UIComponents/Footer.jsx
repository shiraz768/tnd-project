import React from 'react'

const Footer = () => {
  return (
    <>
         <div>
      <footer className="bg-black text-white flex justify-center py-6">
        <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row justify-between  items-center px-6">
          <p className="text-sm">
            &copy; 2025 <span className="font-semibold">TND Dept.</span> | All
            rights reserved.
          </p>
          <p className="text-sm">
            Designed by <span className="font-semibold">Asad Khan</span>
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Footer
