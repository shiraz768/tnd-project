import React from 'react'
import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    
    <div>
    <Fade direction="up" duration={1000}>
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-20 py-10 fade-on-scroll">
    <div className="text-area">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1A2942] mb-4">Aptech TND Department</h1>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
      The Training and Development (TND) Department at Aptech plays a pivotal role in nurturing talent and fostering innovation. As the backbone of Aptech's educational success, the TND Department is committed to designing, developing, and delivering top-quality technical courses that align with global industry standards.
      </p>
    </div>
    <div className="img-area">
      <img src="./Images/about.png" alt="About Aptech" className="w-full max-w-md mx-auto lg:max-w-full rounded-lg shadow-lg" />
    </div>
  </section>
  </Fade>
  </div>
  )
}

export default About