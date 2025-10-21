import React from 'react'
import Image from './Image'

const Cart = ({img,text}) => {
  return (
    <div className='flex flex-col items-center justify-center w-[300px] shadow-lg hover:shadow-2xl  py-2 cursor-pointer'>
        <Image  src={img}/>
<h1 className='font-bold text-xl gap-y-2'>{text}</h1>
        <p className='text-lg text-gray-600 mb-6  text-center w-[300px]'>Easily configure tools to fit your project requirements</p>

    </div>
  )
}

export default Cart