import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../component/Image'
import Errorpage from '../assets/rocket-icon.png'
import Button from '../component/Button'
const Error = () => {
  return (
     <div className='flex flex-col items-center justify-center text-center min-h-screen space-y-5'>
        <Image src={Errorpage}/>
        <h1 className='text-4xl font-bold to-gray-700'>Page not found</h1>
        <p className='text-[#21272A] md:w-2/5 w-full mx-auto'>Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.</p>

        <Link to="/" ><Button text='Go to Home Page'/></Link>
    </div>
  )
}

export default Error