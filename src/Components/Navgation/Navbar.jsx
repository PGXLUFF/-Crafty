import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../Context/NavContext'
const Navbar = () => {

  const navGreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)

  return (
  <div className='flex fixed top-0 w-full justify-between items-start z-50 '>

      <div className='w-24 h-30 lg:w-48 lg:p-5 p-2'>
        <Link to="/" className="block">
          <img
            src="/crafty-social-logo.png"
            alt="Crafty Socials logo"
            className="w-full h-full cursor-pointer"
          />
        </Link>
      </div>
      <div onClick={() => {
        setNavOpen(true)
      }} onMouseEnter={() => {
        navGreenRef.current.style.height = "100%"
      }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%"
        }}
        className='h-10 w-[16vw] relative bg-black cursor-pointer' >
        <div ref={navGreenRef} className='bg-[#D3FD50] absolute transition-all top-0 h-full w-full'>

        </div>
        <div className='relative flex flex-col justify-center items-end gap-2 h-full px-12 cursor-pointer'>
          <div className='lg:w-18 w-10 h-0.5 bg-white'></div>
          <div className='lg:w-16 w-8  h-0.5 bg-white'></div>
          <div className='lg:w-13 w-6 h-0.5 bg-white'></div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
