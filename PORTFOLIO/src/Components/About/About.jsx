import React from 'react'

function About() {
  return (
    <div id='About' className=' w-full h-screen  flex-wrap  flex flex-col md:flex-row
    items-center justify-center mt-6 md:mt-14'>
        <div className='h-2/5 md:h-full w-full md:w-1/3 flex items-center justify-center'>
            <img className='h-2/3 md:h-1/3 w-4/5 rounded-3xl ' 
            src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1" alt="" />
        </div>
        <div className='text-white flex-col flex h-1/2 md:h-full w-full md:w-3/5 items-start justify-center px-2 md:px-5 '>
            <h1 className='text-[60px] md:text-[65px] ml-20 md:ml-0 font-bold md:font-semibold py-2 pt-8 md:pt-0
            hover:text-cyan-300 pl-4 '>About</h1>

            <p className='text-xl md:text-2xl pl-4 font-semibold text-gray-300'>
            👋 Hey, I'm Bhaskar Chatterjee, a Computer Science student at B.P. Poddar Institute of Management and Technology, Kolkata. With an 8.7 CGPA and an 86% score in schooling, I'm passionate about pushing boundaries.
            <br/>
            <br/>
            💻 Specializing in Data Structures and Algorithms with Java, Oops, DBMS, SQL and adept at frontend development, I blend innovation with aesthetics to create captivating digital experiences. Let's innovate and leave a mark on the digital landscape together!
            </p>
            <a href="https://github.com/bhaskarchatterjee970/Resume/blob/main/BhaskarResume.pdf" download>
            <button class="bg-white ml-3 text-black px-5 py-4 rounded-xl mt-4 mx-2 font-semibold hover:bg-slate-300 transition-colors duration-300">
            Download CV
              </button>
            </a>
        </div>

    </div>
  )
}

export default About
