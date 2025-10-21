import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-primary text-white px-4 py-2 rounded-lg hover:bg-black transition ${className}`}>{text}</button>
  )
}

export default Button