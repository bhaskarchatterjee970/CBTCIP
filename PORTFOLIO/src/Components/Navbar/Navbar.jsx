import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className=' w-full h-20 flex items-center justify-between px-8 text-white font-semibold'>
      <div className='logoh1'>
        <h1 className='text-3xl md:text-4xl font-serif'>
          P<span className='text-cyan-300'>ortfolio</span>
        </h1>
      </div>
      <div className='hidden md:flex text-xl items-center gap-x-14 justify-center font-normal'>
        <Link
          className='hover:border-b-2 cursor-pointer hover:border-cyan-300 hover:text-cyan-300'
          activeClass='active'
          to='Hero'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className='hover:border-b-2 cursor-pointer hover:border-cyan-300 hover:text-cyan-300'
          activeClass='active'
          to='About'
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
        >
          About
        </Link>
        <Link
          className='hover:border-b-2 cursor-pointer hover:border-cyan-300 hover:text-cyan-300'
          activeClass='active'
          to='Skills'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className='hover:border-b-2 cursor-pointer hover:border-cyan-300 hover:text-cyan-300'
          activeClass='active'
          to='Projects'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
      </div>
      <div>
      <Link
          className='btn bg-white text-black px-7 py-4 text-[17px] md:text-[16px] hover:bg-cyan-300 rounded-xl cursor-pointer'
          activeClass='active'
          to='Contact'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact Me
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar
