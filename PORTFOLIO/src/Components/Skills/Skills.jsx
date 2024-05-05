import React from 'react'

function Skills() {
  return (
        <div id="Skills" className=' w-full h-auto mt-10 pt-6  p-4 md:flex flex-wrap flex-col md:flex-row '>
            <div className='hover:text-cyan-300 pr-10 md:pb-10 w-full h-1/5 ml-4 md:ml-0 flex justify-center items-center text-center text-[60px] font-bold text-white'>
                My Skills
            </div>
            <div className="images flex-col md:flex-row  gap-y-10 w-full  h-auto mb-10 flex flex-wrap items-center justify-evenly">
                <div className="img w-full md:w-1/4 flex flex-col items-center justify-center">
                    <img className='w-2/5 md:w-[170px] h-[150px]  rounded-full'
                     src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                     <p className='text-white text-center'>React</p>
                </div>
                <div className="img w-full md:w-1/4 flex flex-col items-center justify-center ">
                    <img className='w-2/5 md:w-[170px] h-[150px]  rounded-full'
                    src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="" />
                    <p className='text-white text-center'>HTML5</p>
                </div>
                <div className="img w-full md:w-1/4 flex flex-col items-center justify-center">
                <img className='w-2/5 md:w-[170px] h-[150px]  rounded-full'
                    src="https://cdn.iconscout.com/icon/free/png-256/free-css-alt-3521367-2944811.png" alt="" />
                     <p className='text-white text-center'>CSS</p>
                </div>
                <div className="img w-full md:w-1/4 flex flex-col items-center justify-center">
                <img className='w-2/5 md:w-[170px] h-[150px]  rounded-full'
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-2752148-2284965.png?f=webp" alt="" />
                     <p className='text-white text-center'>javascript</p>
                </div>
                <div className="img w-full md:w-1/4 flex flex-col items-center justify-center">
                <img className='w-2/5 md:w-[170px] h-[150px]  rounded-full'
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" alt="" />
                     <p className='text-white text-center'>Tailwind</p>
                </div>
                <div className="img w-full md:w-1/4 flex flex-col items-center justify-center">
                <img className='w-2/5 md:w-[170px] h-[150px]  rounded-full'
                    src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="" />
                     <p className='text-white text-center'>Java</p>
                </div>
                <div className="img w-full md:w-1/4 flex flex-col items-center justify-center">
                <img className='w-2/5 md:w-[170px] h-[150px]  rounded-full'
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" alt="" />
                     <p className='text-white text-center'>Python</p>
                </div>
                <div className="img w-full md:w-1/4 flex flex-col items-center justify-center">
                <img className='w-2/5 md:w-[170px] h-[150px]  rounded-full'
                    src="https://cdn-icons-png.freepik.com/256/13170/13170533.png?semt=ais_hybrid" alt="" />
                     <p className='text-white text-center'>Github</p>
                </div>
                

            </div>
        </div>
  )
}

export default Skills