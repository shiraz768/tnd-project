import React from "react";


const Contact = () => {
  return (
    <>
      <section className="bg-[#1A2942] text-white flex justify-center  py-16 px-6 w-[100%]">
        <div className="max-w-4xl mx-auto text-center ">
          <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Have questions or need assistance? Feel free to reach out to us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div className="flex flex-col items-center">
              <i className="ri-mail-line text-3xl text-blue-400 mb-2"></i>
              <p>Email</p>
              <a
                href="mailto:sfcprojectdepartment@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                sfcprojectdepartment@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center">
              <i className="ri-map-pin-line text-3xl text-green-400 mb-2"></i>
              <p>Location</p>
              <p className="text-center">
                30-A, Progressive Center, Suite # 202-203, <br /> Main
                Shahra-e-Faisal, Karachi
              </p>
            </div>

            <div className="flex flex-col items-center">
              <i className="ri-phone-line text-3xl text-yellow-400 mb-2"></i>
              <p>Phone</p>
              <a
                href="tel:+923082709968"
                className="hover:text-gray-400 transition"
              >
                +92 308 2709968
              </a>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Contact;