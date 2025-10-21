import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h1 className= {`text-4xl font-bold text-gray-800 ${className}`}>{text}</h1>
  )
}

export default Heading