
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'

const Rootpage = () => {
  return (
    <div>
        <Navber/>
      <div className='md:pt-17 pt-62'>  <Outlet/></div>
<h1>footer</h1>

    </div>
  )
}

export default Rootpage