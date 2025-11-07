import React, { useState } from 'react'
import Heading from '../component/Heading'
import PlanCart from '../component/PlanCart'
import pricing from '../pricing'

const Pricing = () => {
    let [isYearly,SetIsYealy]=useState(false)
    let handletime=()=>{
        SetIsYealy(!isYearly)
    }
  return (
<section className='bg-colorBg py-'>
    <div className='container mx-auto'>
        <p className='text-primary text-center font-semibold pb-3 uppercase'>Pricing</p>
                <Heading className='text-center mb-[20px]' text='Choose Your Plan'/>
                 <p className='text-lg text-gray-600 mb-6  text-center '>Our pricing plans are flexible and designed to fit your needs. Choose a plan that works best for you.</p>
    {/* toggle button */}
    <div className='text-center mb-10'>
        <label className='inline-flex items-center cursor-pointer'>
            <span className='mr-3 text-lg text-gray-700'>
             {
                isYearly? 
                "Yearly Price"
                : "Monthly Price"
             }
            </span>
            <div className=' w-14 h-8 bg-gray-300 rounded-full  relative'>
               {isYearly? <div onClick={handletime} className='h-7 w-7 rounded-full bg-blue-700 absolute right-0'></div>:null}
               {
                isYearly? null: <div onClick={handletime} className='h-7 w-7 rounded-full bg-blue-700 absolute left-0'></div>
               }
            </div>
        </label>
    </div>
    {/* pricing plan */}
  {
    isYearly?
      <div className='flex flex-wrap justify-center gap-2'>
       {
        pricing.map(item=>(
            <PlanCart dep={item.name} member={item.name} price= {item.yearlyPrice}  pra={item.saves} nam={item.name} feature={item.features} />
        ))
       }
    </div>:
      <div className='flex flex-wrap justify-center gap-2'>
       {
        pricing.map(item=>(
            <PlanCart dep={item.name} member={item.name} price= {item.monthlyPrice} nam={item.name} feature={item.features}/>
        ))
         
       } 
      
    </div>
  }
    </div>
</section>
  )
}

export default Pricing