import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'
const PrevArrow = ({ className, style, onClick }) => {
  return (
   <div
    onClick={onClick}
    className="w-[60px] h-[60px] rounded-full bg-gradient-to-l from-indigo-500 to-purple-600 flex justify-center items-center absolute top-1/2 left-6 -translate-y-1/2 z-50 shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300"
  >
    <FaLongArrowAltLeft className="text-white text-3xl" />
  </div>
  )
}

export default PrevArrow