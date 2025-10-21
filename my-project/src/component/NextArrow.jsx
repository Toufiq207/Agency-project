import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
    onClick={onClick}
    className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex justify-center items-center absolute top-1/2 right-6 -translate-y-1/2 z-50 shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300"
  >
    <FaLongArrowAltRight className="text-white text-3xl" />
  </div>
  )
}

export default NextArrow