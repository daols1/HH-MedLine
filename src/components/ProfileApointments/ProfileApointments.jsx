import { Link } from 'react-router-dom'
import {AiTwotoneCalendar} from 'react-icons/ai'
import {motion} from 'framer-motion'

function ProfileApointments() {
  return (
    <>
      {/* Dashborad nav */}
      <nav className='flex list-none py-6 flex-col md:flex-row px-10 md:px-32'>
        <li ><Link to='/profile' className='pr-2 mr-2 border-b hover:border-b-green-600 ' >Dashbord</Link></li>
        <li ><Link to='/profile/appointments' className='px-2 mx-2 border-b hover:border-b-green-600 ' >Appointments</Link></li>
        <li ><Link to='/profile/myprofile' className='px-2 mx-2 border-b hover:border-b-green-600 ' >My Profile</Link></li>
        <li ><Link to='/profile/medical-card' className='px-2 mx-2 border-b hover:border-b-green-600 ' >Medical Card</Link></li>
      </nav>
      <div className='bg-green-50 px-10 md:px-32 pb-20'>
      
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
      {/* Past appointments */}
      <div className='flex flex-col gap-4 pt-3 pb-12'>
          <p>Past Appointmets</p>
          {/* Gonna map trhough some data and return Appointment Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:flex-row '>
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
    </div>
    </>
  )
}

export default ProfileApointments