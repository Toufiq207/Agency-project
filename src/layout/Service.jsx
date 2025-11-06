import React from 'react'
import Heading from '../component/Heading'
import ServiceCart from '../component/ServiceCart'
import { FiActivity, FiCalendar, FiCompass, FiTruck } from "react-icons/fi";
import Button from '../component/Button';
const Service = () => {
  return (
    <section>
        <div className='container mx-auto'>
     <p className='text-primary text-center font-semibold pb-3 uppercase'>Services</p>
        <Heading className='text-center mb-[20px] md:w-[600px] mx-auto' text='Explore Our Range Of Professional Services Tailored To Meet Your Business Needs. '/>
           <p className='text-lg text-gray-600 mb-6  text-center md:w-[900px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus, excepturi eos eaque provident iusto sint hic nihil iste architecto temporibus quasi facere aliquam sed in repellendus cupiditate ipsa, quas quae sapiente. Perspiciatis repudiandae vel magni facilis nulla, ex et modi. Placeat nobis minima porro, mollitia molestiae dolores provident obcaecati!</p>
        <div className='md:flex md:flex-wrap gap-4 w-[1025px] mx-auto pb-[50px]'>

        <ServiceCart icon={<FiCalendar className='text-4xl text-blue-600 ' />} text='Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui.'/>
        <ServiceCart icon={<FiCompass className='text-4xl text-blue-600 ' />} text='Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur.'/>
        <ServiceCart icon={<FiActivity className='text-4xl text-blue-600 ' />} text='Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.'/>
        <ServiceCart icon={<FiTruck  className='text-4xl text-blue-600 ' />} text='Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius.'/>
            
        </div>
        <div className=' text-center'>
          <Button  text=' Explore More '/>
        </div>
        
        </div>
    </section>
  )
}

export default Service