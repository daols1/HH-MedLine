import React from 'react'

function Footer() {
  return (
    <div>
      {/* You might still need to add some contents here */}
      <div className='flex flex-col w-full text-center md:flex-row'>
        <div className='bg-green-500 py-2 w-full md:w-1/2 px-10 md:px-32'>
          <p className='text-slate-100'>
            &copy 2023 Developed by the Humorous History team
          </p>
        </div>
        <div className='bg-green-800 py-2 w-full md:w-1/2 px-10 md:px-32'>
          <p className='text-slate-100'>
            Contact us at ladipodavid13@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer