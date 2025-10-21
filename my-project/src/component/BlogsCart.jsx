import React from 'react'
import Image from './Image'

const BlogsCart = ({img,text,cta,pra,img2,name,dep}) => {
  return (
    <div className='bg-amber-50 w-[300px] '>
        <Image className="hover:scale-105 transition transform" src={img}/>

        <div className='p-5 cursor-pointer'>
            <h3 className='text-sm text-blue-500 font-normal uppercase mb-2'>{cta}</h3>
            <h1 className='text-xl font-bold text-gray-800 mb-2'>{text}</h1></div>
            <p className='text-sm text-gray-600 mb-2'>{pra}</p>
            <div className='flex items-center gap-x-2'>
                <div>
                     <Image src={img2}/>
                </div>
                <div>
                    <p className='text-sm text-gray-800 font-bold'>{name}</p>
                    <p className='text-sm text-gray-500 font-normal'>{dep}</p>
                </div>

            </div>
    </div>
  )
}

export default BlogsCart