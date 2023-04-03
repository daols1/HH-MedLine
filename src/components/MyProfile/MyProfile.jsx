import React from 'react'
import { Link } from 'react-router-dom'

function MyProfile() {
  return (
    <div className='bg-green-50 px-10 md:px-32 pb-20'>
    {/* Dashborad nav */}
      <nav className='flex list-none py-2'>
        <li ><Link to='/profile' className='pr-2 mr-2 border-b hover:border-b-green-600 ' >Dashbord</Link></li>
        <li ><Link to='/profile/appointments' className='px-2 mx-2 border-b hover:border-b-green-600 ' >Appointments</Link></li>
        <li ><Link to='/profile/myprofile' className='px-2 mx-2 border-b hover:border-b-green-600 ' >My Profile</Link></li>
      </nav>
      <div className='flex flex-col sm:flex-row gap-16 pt-6'>
          {/* Main content */}
          <div className='flex flex-col gap-2 bg-white p-6 rounded-xl w-full sm:w-4/6 '>
            <div className='flex flex-row justify-between border-b'>
                <h2>Name</h2>
                <p>Ogunmepkon Sheif</p>
            </div>
            <div className='flex flex-row justify-between border-b'>
                <h2>Email</h2>
                <p>somthing</p>
            </div>
            <div className='flex flex-row justify-between border-b'>
                <h2>Mobile Number</h2>
                <p>somthing</p>
            </div>
            <div className='flex flex-row justify-between border-b'>
                <h2>DOB</h2>
                <p>somthing</p>
            </div>
            <div className='flex flex-row justify-between border-b'>
                <h2>Home address</h2>
                <p>somthing</p>
            </div>
            <button className='bg-green-600 text-slate-100 py-2 rounded-xl hover:bg-green-700'>Edit</button>
          </div>
          <div className='w-2/6'>
            Picture
            Name
            Details
          </div>
      </div>
    </div>
  )
}

export default MyProfile