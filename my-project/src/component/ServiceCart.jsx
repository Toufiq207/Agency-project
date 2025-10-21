import React from 'react'

const ServiceCart = ({icon,text}) => {
  return (
    <div className=' border w-[500px] relative hover:shadow-2xl'>
       <div  className="absolute left-1/2 top-3 -translate-x-1/2"> {icon}</div>
                   <p className='text-lg text-gray-600   text-center  mx-auto  w-[440px] pb-4 pt-20'>{text}</p>
    </div>
  )
}

export default ServiceCart
