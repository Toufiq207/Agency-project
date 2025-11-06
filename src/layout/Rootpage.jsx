
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'
import Footer from './Footer'

const Rootpage = () => {
  return (
    <div>
        <Navber/>
      <div className='md:pt-17 pt-62'>  <Outlet/></div>
<Footer/>

    </div>
  )
}

export default Rootpage