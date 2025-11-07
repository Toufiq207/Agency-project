import React, { useState } from 'react'
import Button from './Button'

const PlanCart = ({dep,member,price ,pra,nam,feature,due}) => {
      
  return (
    <div className='border w-[400px] rounded-lg bg-white p-5 text-center'>
      
<h1 className='text-2xl font-semibold text-gray-800 my-3 '>{dep}</h1>

<p className=''> Best for {member}s</p>
<div className='text-3xl font-bold text-gray-800'>${price}</div>
<p className='mt-5 pb-2'>{pra}</p>
<Button className='rounded-full' text={`Choose ${nam}`}/>
<div className='p-5 md:px-12 py-5'>
    <ul  className=" pl-5 space-y-1">
  {feature.map((feat, index) => (
    <li key={index}>{feat}</li>
  ))}
</ul>
</div>

    </div>
  )
}

export default PlanCart