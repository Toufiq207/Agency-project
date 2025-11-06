import React, { useState } from 'react'
import Heading from '../component/Heading'
import Button from '../component/Button'

    import Image from '../component/Image'
import BannerImg from '../assets/banner.png'
import { BsPlayCircle } from "react-icons/bs";
const Banner = () => {
    let [showModel,setShowModel]=useState(false);
    let openModel=()=>(
        setShowModel(true)
    )
    let closeModel=()=>(
        setShowModel(false)
    )
  return (
    <div className=' bg-colorBg'>
        <div className='container mx-auto flex justify-between items-center py-20 flex-col md:flex-row lg:flex-row'>
            <div >
                <Heading className="mb-4" text='Creative Web Design For Businesses'/>
                <p className='text-lg text-gray-600 mb-6 md:w-[650px] w-full'>Join thousands of businesses already growing with our solutions. Let’s help you take your business to the next level!</p>
                <div className='flex gap-2 md:flex-row flex-col'>
                <Button text='Get Started'/>
                <Button text='Contact Us'/>
            </div>
            </div>
            
            <div className='relative group '>
                <Image className='shadow-2xl' src={BannerImg}/>
                <BsPlayCircle onClick={openModel } className='text-5xl text-white group-hover:text-red-600 absolute
                top-[50%] right-[50%] ' />
            </div>
            {
                showModel && <div className='fixed md:inset-0  lg:inset-0 flex items-center justify-center bg-[#00000040] z-50'>
                    <div className='bg-amber-50 p-5 rounded-lg shadow-lg relative max-w-xl w-full'>
                        <button  onClick={closeModel}>&times;</button>
                        <iframe className='w-full' width="560" height="315" src="https://www.youtube.com/embed/tyxswccv-VU?si=xofw5c4LO8DEcqmJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Banner