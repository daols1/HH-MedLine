import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../../assets/logo.png'
import Logo from '../../assets/logo/4.png'
import {BiMenuAltRight} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import { motion } from 'framer-motion'

function NavBar() {

  // Screen size logic
  const [nav, setNav] = useState(false)

  const navHandler = () => {
    setNav(!nav)
  }

  // Check screen size

  const screenChcker = window.innerWidth >= 1000


  return (
    <div className='flex justify-between w-full h-18 items-center px-10 md:px-32 bg-green-600 relative z-30 h-14'>
      {/* Logo */}
      {/* <img src={Logo} className="h-14 w-14" /> */}
      <h2 className='text-3xl font:[Chivo_Mono] self-center bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-50 font-bold'>HH-Medline</h2>
      {
        // To show the mobile or normal menu 
        !nav || screenChcker ?
        <ul className='flex hidden lg:inline-flex align-center ' >
          <li className='px-2 text-slate-100'><Link to='/'  >Home</Link></li>
          <li className='px-2 text-slate-100'><Link to='/book-an-appointment'  >Book a Doc</Link></li>
          <li className='px-2 text-slate-100'><Link to='/profile'  >Profile</Link></li>
          <li className='px-2 text-slate-100'><Link to='/search-doc' >Search Doc</Link></li>
          <li className='px-8 rounded hover:bg-green-700 text-slate-100 bg-green-800'><Link to='/signup' >Sign Up</Link></li>
        </ul>
        :
        <motion.div 
        initial={{
          translateY: -40,
        }}
        whileInView={{
          translateY: -10,
        }}
        transition={{
          damping:80,
          duration:.3,
        }}
        className='mt-16 bg-green-600 absolute top-0 left-0 w-[100%] text-center py-4 list-none '>
          <li className='py-2 text-slate-100'><Link to='/' onClick={() => navHandler()} >Home</Link></li>
          <li className='py-2 text-slate-100'><Link to='/book-an-appointment' onClick={() => navHandler()} >Book a Doc</Link></li>
          <li className='py-2 text-slate-100'><Link to='/profile' onClick={() => navHandler()} >Profile</Link></li>
          <li className='py-2 text-slate-100'><Link to='/search-doc' onClick={() => navHandler()} >Search Doc</Link></li>
          <li className='px-8 hover:bg-green-700 text-slate-100 bg-green-800'><Link to='/signup' onClick={() => navHandler()} >Sign Up</Link></li>
        </motion.div>
      }
      {
        !nav ?
          <BiMenuAltRight className='lg:hidden' size={35} color='#fff' onClick={() => navHandler()} />
        :
          // null
          <IoMdClose className='lg:hidden' size={35} color='#fff' onClick={() => navHandler()} />
      }      
    </div>
  )
}

export default NavBar