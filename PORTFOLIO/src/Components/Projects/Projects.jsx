import React from 'react'

function Projects() {
  return (
    <div id='Projects' className=' gap-y-2 w-full h-[800px] mt-[200px] md:mt-[300px] pt-6  p-4 md:flex flex-wrap flex-col text-white'>
        <div className='w-full h-8 md:h-1 flex justify-center items-center'>
            <h1 className='text-[60px] font-bold hover:text-cyan-300'>My Projects</h1>
        </div>

        <div className='w-full h-11/12  md:h-4/5 mt-10 md:mt-0  text-white flex flex-wrap flex-col md:flex-row justify-around items-center'>
            <div className="box mb-14 md:mb-0 h-1/4 md:h-3/5  w-8/12 md:w-1/4  rounded-2xl flex md:items-center flex-col md:justify-center">
              <h2 className='text-center font-semibold text-xl md:text-3xl'>Portfolio</h2>
              <img className='h-4/6 w-3/5 md:w-[260px] ml-14 md:mt-4' src='https://github.com/krrish9368/reactjs-portfolio-part-1/blob/main/portfolio.png?raw=true' />
              <div className='mt-6 w-full h-5 md:ml-4 flex items-center justify-center gap-x-6 font-bold text-[16px] md:text-xl '>
                <button className='text-gray-700 rounded-md bg-slate-200 px-4 py-2'><a href='https://github.com/bhaskarchatterjee970/CBTCIP/tree/main/PORTFOLIO'>Github</a></button>
                <button className='text-gray-700 rounded-md bg-slate-200 px-4 py-2'><a href='#'>Live Link</a></button>
              </div>
            </div>

            <div className="box  mb-14 md:mb-0 h-1/4 md:h-3/5 w-4/5 md:w-1/4   rounded-2xl flex md:items-center flex-col md:justify-center">
              <h2 className='text-center font-semibold text-[20px]  md:text-[28px]'>Customizable Password Generator </h2>
              <img className='h-full md:h-4/6 w-3/5 md:w-[260px] ml-14 md:ml-1 md:mt-1 rounded-xl' src="https://blog.nerdjfpb.com/wp-content/uploads/2022/02/1.-React-Password-Gen-Final-Output-1024x502.png" alt="" />
              <div className='mt-6 w-full h-5 md:ml-4 flex items-center justify-center gap-x-6 font-bold text-[16px] md:text-xl '>
                <button className='text-gray-700 rounded-md bg-slate-200 px-4 py-2'><a href='https://github.com/bhaskarchatterjee970/Password_Generator'>Github</a></button>
                <button className='text-gray-700 rounded-md bg-slate-200 px-4 py-2'><a href='#'>Live Link</a></button>
              </div>
            </div>

            <div className="box mb-14 md:mb-0 h-1/4 md:h-3/5 w-3/5 md:w-1/4  rounded-2xl flex md:items-center flex-col md:justify-center">
              <h2 className='text-center font-semibold text-xl md:text-3xl'>Bubble Popper Game</h2>
              <img className='h-4/6 w-3/5 md:w-[260px] ml-10 md:ml-6 md:mt-4 rounded-xl'  src="https://wellgames.com/storage/uploads/screenshots/jpg/bubble-wobble_1611648405_0.jpg" alt="" />
              <div className='mt-6 w-full h-5 md:ml-4 flex items-center justify-center gap-x-6 font-bold text-[16px] md:text-xl '>
                <button className='text-gray-700 rounded-md bg-slate-200 px-4 py-2'><a href='https://github.com/bhaskarchatterjee970/BubbleGame'>Github</a></button>
                <button className='text-gray-700 rounded-md bg-slate-200 px-4 py-2'><a href='#'>Live Link</a></button>
              </div>
            </div>

            <div className="box mb-14 md:mb-0  h-1/4 md:h-3/5 w-3/5 md:w-1/4  rounded-2xl flex md:items-center flex-col md:justify-center">
              <h2 className='text-center font-semibold text-xl md:text-3xl'>Mind Master</h2>
              <img className='h-4/6 w-3/5 md:w-[260px] ml-10 md:mt-4 rounded-xl' src="https://easyshiksha.com/online_courses/assets/games/number-guessing/images/banner.png" alt="" />
              <div className='mt-6 w-full h-5 md:ml-4 flex items-center justify-center gap-x-6 font-bold text-[16px] md:text-xl '>
                <button className='text-gray-700 rounded-md bg-slate-200 px-4 py-2'><a href='https://github.com/bhaskarchatterjee970/NumberGuessing_Game'>Github</a></button>
                <button className='text-gray-700 rounded-md bg-slate-200 px-4 py-2'><a href='#'>Live Link</a></button>
              </div>
            </div>

            

        </div>
    </div>
  )
}

export default Projects
