import React from 'react'
import Banner from '../layout/Banner'
import Tools from '../layout/Tools'
import CompanyLogo from '../component/CompanyLogo'
import Service from '../layout/Service'
import Testimonial from '../layout/Testimonial'
import Blogs from './Blogs'



const Homepage = () => {
  return (
    <div>
      <Banner/>
      <Tools/>
      <CompanyLogo/>
      <Service/>
      <Testimonial/>
      <Blogs/>
      
    </div>
  )
}

export default Homepage