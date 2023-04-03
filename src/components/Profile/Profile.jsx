import { Link } from 'react-router-dom'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {motion} from 'framer-motion'

function Profile() {
  return (
    <div className='bg-green-50 px-10 md:px-32 pb-20'>
      {/* Dashborad nav */}
      <nav className='flex list-none py-2'>
        <li ><Link className='pr-2 mr-2 border-b hover:border-b-green-600 ' >Dashbord</Link></li>
        <li ><Link className='px-2 mx-2 border-b hover:border-b-green-600 ' >Appointments</Link></li>
        <li ><Link className='px-2 mx-2 border-b hover:border-b-green-600 ' >My Profile</Link></li>
      </nav>
        <div className='flex flex-col gap-4 pt-3 pb-12'>
          <p>Next Appointmets</p>
          {/* Gonna map trhough some data and return Appointment Cards */}
        <div className='flex flex-col gap-6 sm:flex-row '>
          <motion.div 
          initial={{
            y: 100,
            opacity:0,
          }}
          whileInView={{
            y:0,
            opacity:1,
          }}
          className='flex gap-4 bg-green-100 rounded-xl p-2 border w-full items-center shadow-xl '>
            <AiTwotoneCalendar size={35} />
            <div className='flex flex-col gap-0.5'>
              {/* The contents are meant to be dynamic */}
              <h3>Appointment - 05/04/23</h3>
              <p>Name of Doc -</p>
              <p>Cause of meeting</p>
              <button className='justify-self-start bg-green-600 max-w-fit text-white px-4 py-1 rounded-2xl'>Connect</button>
            </div>
          </motion.div>
          <motion.div 
          initial={{
            y: 100,
            opacity:0,
          }}
          whileInView={{
            y:0,
            opacity:1,
          }}
          className='flex gap-4 bg-green-100 rounded-xl p-2 border w-full items-center shadow-xl '>
            <AiTwotoneCalendar size={35} />
            <div className='flex flex-col gap-0.5'>
              {/* The contents are meant to be dynamic */}
              <h3>Appointment - 05/04/23</h3>
              <p>Name of Doc -</p>
              <p>Cause of meeting</p>
              <button className='justify-self-start bg-green-600 max-w-fit text-white px-4 py-1 rounded-2xl'>Connect</button>
            </div>
          </motion.div>
          <motion.div 
          initial={{
            y: 100,
            opacity:0,
          }}
          whileInView={{
            y:0,
            opacity:1,
          }}
          className='flex gap-4 bg-green-100 rounded-xl p-2 border w-full items-center shadow-xl '>
            <AiTwotoneCalendar size={35} />
            <div className='flex flex-col gap-0.5'>
              {/* The contents are meant to be dynamic */}
              <h3>Appointment - 05/04/23</h3>
              <p>Name of Doc -</p>
              <p>Cause of meeting</p>
              <button className='justify-self-start bg-green-600 max-w-fit text-white px-4 py-1 rounded-2xl'>Connect</button>
            </div>
          </motion.div>
        </div>
      </div>
      <hr />
      {/* Cause of Meetings */}
      <div className='flex flex-col mt-5 p-4 bg-white rounded-xl gap-3'>
        <p>Tretments</p>
        {/* Also gonna map through some data and print */}
        <motion.div
        initial={{
          y: 100,
          opacity:0,
        }}
        whileInView={{
          y:0,
          opacity:1,
        }}
        transition={{
          delay: 0,
        }}
        
        className='border-b ml-4 py-2'>
          {/* Treatment name */}
          <h3>Name: Odeiticity</h3>
          {/* Short Description */}
          <p>Short Description: Check you body fam</p>
        </motion.div>
        <motion.div 
        initial={{
          y: 100,
          opacity:0,
        }}
        whileInView={{
          y:0,
          opacity:1,
        }}
        transition={{
          delay: 0.5,
        }}
        
        className='border-b ml-4 py-2'>
          {/* Treatment name */}
          <h3>Name: Odeiticity</h3>
          {/* Short Description */}
          <p>Short Description: Check you body fam</p>
        </motion.div>
        <motion.div 
        initial={{
          y: 100,
          opacity:0,
        }}
        whileInView={{
          y:0,
          opacity:1,
        }}
        transition={{
          delay: 1,
        }}
        

        className='border-b ml-4 py-2'>
          {/* Treatment name */}
          <h3>Name: Odeiticity</h3>
          {/* Short Description */}
          <p>Short Description: Check you body fam</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile