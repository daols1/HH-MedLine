import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import { fetcher } from '../../utils/fetcher'
// import Loader from '../Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MedicalCard() {

    // Toast function
    const taoster = (msg) =>{
        toast.info(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    // Fetching logic
    const {data, isLoading, isError} = useQuery({
        queryKey: ["patientCard"],
        queryFn: fetcher,
    })

    if (isLoading) {

        taoster('Loading...')

        return(
            <ToastContainer />
        )
    }

    if (isError) {
        return <div>Error don happen ooo</div>
    }


  return (
    <div className='px-10 md:px-32'>
        {/* Dashborad nav */}
        <nav className='flex list-none py-2'>
          <li ><Link to='/profile' className='pr-2 mr-2 border-b hover:border-b-green-600 ' >Dashbord</Link></li>
          <li ><Link to='/profile/appointments' className='px-2 mx-2 border-b hover:border-b-green-600 ' >Appointments</Link></li>
          <li ><Link to='/profile/myprofile' className='px-2 mx-2 border-b hover:border-b-green-600 ' >My Profile</Link></li>
          <li ><Link to='/profile/medical-card' className='px-2 mx-2 border-b hover:border-b-green-600 ' >Medical Card</Link></li>
        </nav>
        <div>
            This is the fetched data.
            


            {data.data[0].attributes.doctorName}
        </div>
    </div>
  )
}

export default MedicalCard