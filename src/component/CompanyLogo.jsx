import React from 'react'
import Heading from './Heading'
import { FaAmazon, FaApple, FaFacebook, FaGoogle, } from "react-icons/fa";
import { FaMicrosoft } from 'react-icons/fa6';
const CompanyLogo = () => {
    const logo=[
{icon: FaApple ,name:"Apple" },
{icon: FaGoogle ,name:"Google" },
{icon: FaAmazon ,name:"Amazon" },
{icon: FaMicrosoft ,name:"Microsoft" },
{icon: FaFacebook ,name:"Facebook" },
    ]
  return (
   
   <section className='bg-colorBg py-20'>
    <div className='container mx-auto'>
           <p className='text-primary text-center font-semibold pb-3 uppercase'>Our trusted partners</p>
        <Heading className='text-center mb-[20px]' text='Companies we have worked with'/>
           <p className='text-lg text-gray-600 mb-6  text-center '>We have paetnered with some of the most inovative and leading companies to bring the best solutions to you</p>
    <div className='border-y border-gray-600 py-4'>
        <div className='flex flex-wrap justify-around items-center md:space-x-14 space-x-8 animate-scroll'>
         {
            logo.map((item,index)=>(
                <div key={index} className='flex justify-center items-center bg-amber-50 rounded-ful p-6 w-28 h-28 hover:scale-110 duration-500 rounded-full'>
                    <item.icon className='text-primary text-4xl' title={item.name}/>
                </div>
            ))
         }
        </div>
        
    </div>
    </div>
   </section>
  )
}

export default CompanyLogo