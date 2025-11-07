import React from 'react'
import Image from './Image'
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import Button from '../component/Button'
const TeamCart = ({img,member,dep,licom,ticon,Iicon,Ficon,nam}) => {
  return (
    <div className='bg-amber-50 hover:shadow-lg rounded-lg w-[300px]'>
        <Image className='w-full rounded-lg' src={img}/>
        <div className='p-5 '>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>{member}</h3>
          <p className='text-sm text-gray-500 mb-4'>{dep}</p>
         <div className='flex items-center space-x-4 pb-2'>
             <a href={licom} target='balak'><FaLinkedinIn /></a>
          <a href={ticon} target='balak'><FaTwitter/></a>
          <a href={Iicon} target='balak'><FaInstagram/></a>
          <a href={Ficon} target='balak'><FaFacebookF/></a>
         </div  >
         <Button className='!rounded-full'  text={`Contact ${nam.slice(0,5)}`}/>
        </div>
    </div>
  )
}

export default TeamCart