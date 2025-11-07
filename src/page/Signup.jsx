import React from 'react'
import Button from '../component/Button'
import {  IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
      <section className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='w-md bg-white p-8  shadow-md rounded-lg'>
            <h2 className='text-2xl font-bold text-center text-gray-800'>Please Register</h2>
           <div>
             <label className=' text-sm font-normal' htmlFor="email">Email:</label> <br />
            <input className={`w-full py-2 pt-2`} type="email" id='email' placeholder='Enter your Email'/>
           </div>
 <div className='py-2'>
               <label className=' text-sm font-normal ' htmlFor="password">Password: </label> <br />
            <input className={`w-full py-2 pt-2`} type="password" id='password' placeholder='Enter your password'/>
 </div>
  <Button  className='w-full ' text='Sign up'/>
                      <p className='text-gray-600 text-center py-2'>Or sign-up with</p>
        
        <div className='flex justify-between'>
            <button className='flex  items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded hover:bg-red-600'>
            
<IoLogoGoogle /> 
  Google

            </button>
            <button className='flex  items-center px-4 py-2 space-x-2 text-white bg-gray-800  rounded hover:bg-gray-900'>
            
<IoLogoGithub />
  Github

            </button>
            <button className='flex  items-center px-4 py-2 space-x-2 text-white bg-blue-500  rounded hover:bg-blue-900'>
            
<IoLogoFacebook />
  FIoLogoFacebook

            </button>
          
    </div>
           
           
        
              <p className='text-center pt-4 text-sm text-gray-600 '>Have an account? Please <Link className='text-blue-500 hover:underline' to='/login'>Login</Link></p>
        
        
        </div>

       
    </section>
  )
}

export default Signup