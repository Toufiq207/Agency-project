import React, { useState } from 'react'
import Image from '../component/Image';
import Web from '../assets/web.png'
import { Link } from 'react-router-dom';
import Button from '../component/Button';
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { FaBars } from 'react-icons/fa';

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catagories, setCatagories] = useState(false);

  const handleshow = () => {
    setCatagories(!catagories);
  };

  return (
    <nav className="bg-white shadow-sm w-full fixed top-0 left-0 z-[9999]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* ---------- Left: Logo ---------- */}
          <div className="flex items-center">
            <Link to="/">
              <Image src={Web} />
            </Link>
          </div>

          {/* ---------- Center: Desktop Menu ---------- */}
          <ul className="hidden md:flex space-x-6 items-center">
            <Link to="/"><li>Home</li></Link>
            <Link to="services"><li>Services</li></Link>
            <Link to="/blogs"><li>Blogs</li></Link>
            
            <li className="relative">
              <div className='flex items-center gap-x-2 cursor-pointer' onClick={handleshow}>
                <h1>Catagories</h1>
                {catagories ? <FaArrowDown /> : <FaArrowRight />}
              </div>

              {catagories && (
                <ul className="p-2 absolute bg-white shadow-md rounded top-10 left-0 w-44">
                  <li><Link to='/'>Web Design</Link></li>
                  <li><Link to='/'>App Development</Link></li>
                  <li><Link to='/'>UI/UX Design</Link></li>
                  <li><Link to='/'>Digital Marketing</Link></li>
                </ul>
              )}
            </li>
          </ul>

          {/* ---------- Right: Buttons ---------- */}
          <div className="hidden md:flex gap-2">
            <Link to='login'> 
              <Button text="Log in" />
            </Link>
            <Link to='pricing'>   
              <Button text='Start Free Trial' />
            </Link>
          </div>

          {/* ---------- Mobile Menu Button ---------- */}
          <div className="flex md:hidden ">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black w-10 h-10 flex items-center justify-center"
            >
              {menuOpen ?
              
                  <ImCross />:<FaBars />
              
              
              // (
              //   // close (X) icon
              //   <svg
              //     xmlns="http://www.w3.org/2000/svg"
              //     className="h-6 w-6"
              //     fill="none"
              //     viewBox="0 0 24 24"
              //     stroke="currentColor"
              //   >
              //     <path
              //       strokeLinecap="round"
              //       strokeLinejoin="round"
              //       strokeWidth="2"
              //       d="M6 18L18 6M6 6l12 12"
              //     />
              //   </svg>
              // ) : (
              //   // hamburger (bar) icon
              //   <svg
              //     xmlns="http://www.w3.org/2000/svg"
              //     className="h-6 w-6"
              //     fill="none"
              //     viewBox="0 0 24 24"
              //     stroke="currentColor"
              //   >
              //     <path
              //       strokeLinecap="round"
              //       strokeLinejoin="round"
              //       strokeWidth="2"
              //       d="M4 6h16M4 12h16M4 18h16"
              //     />
              //   </svg>
              // )
              
              
              
              }
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md fixed top-16 left-0 w-full p-4 space-y-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="services">Services</Link></li>
          <li><Link to="blogs">Blogs</Link></li>

          <li className="relative">
            <div className='flex items-center gap-x-2 cursor-pointer' onClick={handleshow}>
              <h1>Catagories</h1>
              {catagories ? <FaArrowDown /> : <FaArrowRight />}
            </div>

            {catagories && (
              <ul className="p-2 bg-white shadow-md rounded mt-2">
                <li><Link to='/'>Web Design</Link></li>
                <li><Link to='/'>App Development</Link></li>
                <li><Link to='/'>UI/UX Design</Link></li>
                <li><Link to='/'>Digital Marketing</Link></li>
              </ul>
            )}
          </li>

          <div className='flex flex-col gap-2'>
            <Link to='login'> 
              <Button text="Log in"/>
            </Link>
            <Link to='pricing'>   
              <Button text='Start Free Trial'/>
            </Link>
          </div>
        </ul>
      )}
    </nav>
  )
}

export default Navber
