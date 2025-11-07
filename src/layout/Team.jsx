import React from 'react'
import Heading from '../component/Heading'
import data from '../data'

import Image from '../component/Image'
import TeamCart from '../component/TeamCart'



const Team = () => {
 

  return (
<section className=' bg-colorBg'>
    <div className='container mx-auto py-20'>
<p className='text-primary text-center font-semibold pb-3 uppercase'>Our Team</p>
        <Heading className='text-center mb-[20px] md:w-[600px] mx-auto' text='Meet The Experts '/>
<div className='flex flex-wrap justify-center gap-5 '>
{
  data.map(item=>(
    <TeamCart member={item.name} img={item.image} dep={item.role} licom={item.linkedIn} ticon={item.twitter} Iicon={item.instagram} Ficon={item.facebook} nam={item.name}/> 
    
  ))
}
 
</div>
    </div>
</section>
  )
}

export default Team