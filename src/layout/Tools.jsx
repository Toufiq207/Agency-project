import React from 'react'
import Heading from '../component/Heading'
import Cart from '../component/Cart'
import Setting from '../assets/setting.png'
import Devlop from '../assets/developer.png'
import Responsive from '../assets/responsive.png'
import Cloud from '../assets/cloud.png'
import Button from '../component/Button'
const Tools = () => {
  return (
    <div className='container mx-auto py-20'>
        <p className='text-primary text-center font-semibold pb-3 uppercase'>The tools you need</p>
        <Heading className='text-center mb-[20px]' text='All-in-one Solution for Your Projects '/>
        <div className='flex gap-4 justify-center md:flex-row flex-col items-center'>
            <Cart img={Setting} text='Customizable Settings'/>
            <Cart img={Devlop} text='Customizable Settings'/>
            <Cart img={Responsive} text='Responsive Design'/>
            <Cart img={Cloud} text='Cloud Integration'/>

        </div >
        <div className='mt-[50px] text-center'>
          <Button  text=' Explore More '/>
        </div>
    </div>
  )
}

export default Tools