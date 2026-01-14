import React from 'react'
import { Link } from 'react-router-dom'

const Homebottomtex = () => {
  return (
    <div className="absolute bottom-16 left-0 w-full flex flex-col items-center justify-center z-20 text-white font-[font2] text-center px-4">

      {/* Paragraph */}
      <p className="text-xs sm:text-sm lg:text-base max-w-3xl mx-auto text-white/80 mb-6 leading-relaxed">
        Through responsive design, compelling content, and innovative digital strategies that propel your business growth forward.
      </p>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-6 flex-wrap">
        <Link
          to="/Contact"
          className="border-2 lg:border-4 border-white rounded-full uppercase text-base sm:text-xl lg:text-2xl px-10 py-4 hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300"
        >
          Contact
        </Link>
{/* 
        <Link
          to="/Agyence"
          className="border-2 lg:border-4 border-white rounded-full uppercase text-base sm:text-xl lg:text-2xl px-10 py-4 hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all duration-300"
        >
          Agence
        </Link> */}
      </div>
    </div>
  )
}

export default Homebottomtex
