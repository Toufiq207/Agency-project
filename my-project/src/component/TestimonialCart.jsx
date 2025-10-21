import React from 'react'
import Image from './Image'

const TestimonialCart = ({img,text,letter,Customer,pra}) => {
  return (
     <div className=' border w-[500px] relative hover:shadow-2xl'>
       <div  className="absolute left-1/2 top-3 -translate-x-1/2"> <Image src={img}/></div>
                   <p className='text-lg text-gray-600  italic   mx-auto  w-[440px] pb-4 py-20 '>{text}</p>
                   <div className='size-10 rounded-full bg-blue-100 flex justify-center items-center mx-auto'><h1 className='text-blue-600 font-bold text-2xl'>{letter}</h1></div>
                   <h3 className='text-lg text-center font-bold text-gray-800'>{Customer}</h3>
                   <p className='text-center text-sm text-gray-500 pb-4'>{pra}</p>
    </div>
  )
}

export default TestimonialCart