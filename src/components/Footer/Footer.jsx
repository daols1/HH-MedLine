import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='w-full flex flex-col bg-green-700 py-5' >
      {/* You might still need to add some contents here to make the footer more like a footer :) */}
      <div className='flex flex-col'>
         <ul className=' px-10 md:px-32 w-full flex items-center md:justify-center' >
          <li className='md:px-8 rounded-xl hover:bg-slate-100 hover:text-green-700 text-slate-100 py-2 transition-all ease-in duration-300 mx-2 text-sm '><Link to='/' onClick={() => navHandler()} >Home</Link></li>
          <li className='md:px-8s rounded-xl hover:bg-slate-100 hover:text-green-700 text-slate-100 py-2 transition-all ease-in duration-300 mx-2 text-sm '><Link to='/book-an-appointment' onClick={() => navHandler()} >Book a Doc</Link></li>
          <li className='md:px-8 rounded-xl hover:bg-slate-100 hover:text-green-700 text-slate-100 py-2 transition ease-in duration-300 mx-2 text-sm '><Link to='/profile' onClick={() => navHandler()} >Profile</Link></li>
          <li className='md:px-8 rounded-xl hover:bg-slate-100 hover:text-green-700 text-slate-100 py-2 transition-all ease-in duration-300 mx-2 text-sm '><Link to='/signup' >Sign Up</Link></li>
        </ul>
        <div className='w-full flex flex-col md:flex-row justify-between'>
          <div className=' py-2  px-10 md:px-32'>
            <p className='text-slate-100 text-sm font-thin md:text-lg md:font-normal'>
              &copy; 2023 Developed by the Humorous History team
            </p>
          </div>
          <div className=' py-2  px-10 md:px-32'>
            <p className='text-slate-100 text-sm font-thin md:text-lg md:font-normal'>
              Contact us at ladipodavid13@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer