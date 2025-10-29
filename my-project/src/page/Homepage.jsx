import React from 'react'
import Banner from '../layout/Banner'
import Tools from '../layout/Tools'
import CompanyLogo from '../component/CompanyLogo'
import Service from '../layout/Service'
import Testimonial from '../layout/Testimonial'
import Blogs from './Blogs'
import Team from '../layout/Team'
import Pricing from '../layout/Pricing'
import FaqSection from './FaqSection'
import NewsLetter from './NewsLetter'



const Homepage = () => {
  return (
    <div>
      <Banner/>
      <Tools/>
      <CompanyLogo/>
      <Service/>
      <Testimonial/>
      <Blogs/>
      <Team/>
      <Pricing/>
      <FaqSection/>
      <NewsLetter/>
      
    </div>
  )
}

export default Homepage