import React from 'react';
// import myImage from './src/me.png';
// Import your image

function Hero() {
  return (
    <div>
      <div id='Hero' className='Hero hidden w-full mt-12  h-[400px] text-white flex-col md:flex-row md:flex flx-wrap'>
        <div className='left w-full md:w-3/5 h-full'>
          <div className='w-full h-1/2 flex space-y-1 font-bold flex-col justify-center items-center md:items-start px-8 mt-32'>
            <h1 className='text-[25px]'>Hi,Myself</h1>
            <h1 className='text-[60px] font-semibold'>Bhaskar Chatterjee</h1>
            <h1 className='text-[35px]'>And I'm a <span className='text-cyan-300 text-[35px]'>Frontend Developer</span></h1>
            <p className='text-xl pt-2 font-normal'>Eager to learn every bleeding edge technology, and obtain a challenging
            position in a well esteemed organization where i can contribute to the welfare 
            of society through my technical skills. 
            </p>
          </div>
        </div>

        <div className="right w-full md:w-2/5 h-[500px]  flex items-center justify-center">
          {/* Use the imported image */}
          <div className="border-5 border-blue-500 rounded-full overflow-hidden p-1">
            <img className='w-[380px] h-[480px] rounded-full'  src='./src/myself.png' alt='' />
          </div>
        </div>
      </div>

      <div id='Hero' className='w-full h-screen md:h-[400px] text-white flex-col md:flex-row md:hidden flx-wrap'>
        <div className="top w-full h-1/2 flex items-center justify-center">
          {/* Use the imported image */}
          <div className="border-[6px] border-blue-500 rounded-full overflow-hidden p-1">
            <img className='w-[250px] h-[318px] rounded-full'  src='./src/myself.png' alt='' />
          </div>
        </div>
        <div className='down w-full h-1/2'>
          <div className='w-full h-1/2 flex space-y-3 flex-col justify-center items-center md:items-start px-8 mt-20'>
            <h1 className='text-xl font-bold'>Hi,Myself</h1>
            <h1 className='text-[40px] font-semibold'>Bhaskar Chatterjee</h1>
            <h1 className='text-[25px] font-semibold'>And I'm a <span className='text-cyan-300'>Frontend Developer</span></h1>
            <p className='text-[19px] text-gray-300 font-bold pl-2'>Eager to learn every bleeding edge technology, and obtain a challenging
            position in a well esteemed organization where i can contribute to the welfare 
            of society through my technical skills. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
