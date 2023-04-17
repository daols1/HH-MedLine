import { useMutation } from '@tanstack/react-query';
import React from 'react'
import {useForm} from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { poster } from "../../utils/poster"
import { Link } from 'react-router-dom';
import axios from 'axios';

function MedicalCardDetails() {
    // Toast function.
    const toaster = (msg) =>{
        toast.success(msg, {
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

    // Mutation function.
    const {mutate,isLoading, isError} = useMutation({
        mutationFn: poster,

    })

    // Trying a post func

    const dataPost = {
        "data":{
            "name":"Oloba mumu",
            "address":"13 Okitipupa idishdhsd, Cement, Ikeja",
            "dateOfBirth":"2023-03-05",
            "bloodGroup":"O",
            "phoneNumber": "3456789087654"
        }
    }
        
    

    // axios.post("http://localhost:1337/api/medical-cards/", dataPost)
    //     .then(response => {
    //         console.log(response.data)
    //     })

    // poster({
    //     address: "13 Okitipupa Street, Cement, Ikeja",
    //     id: "A",
    //     name: "David Adeyanju Ladipo",
    //     number: "+2348149245168",
    //     yob: "2023-04-25",
    // })

    // Logic for state management on for the form
    // I using React Hook Form for validation and submission.

    const form = useForm()
    // registration & destructurring
    const { register, control, handleSubmit, formState, reset } = form
    const { errors } = formState
    // Submit handler 

    
    const submitHandler = (data) => {
        console.log("Form submitted", data)
        // Post to the backend.
        const dataReal = {
            "data":data
        }
        axios.post("http://localhost:1337/api/medical-cards/", dataReal)
        .then(response => {
            console.log(response.data)
        })
        // Clear form state.
        reset()
        // Mutation function.
        // const {mutate,isLoading, isError} = useMutation({
        //     mutationFn: (data) => {
        //         return axios.post("http://localhost:1337/api/medical-cards/", 
        //         {"data":data}
        //         )
        //     },

        // })
        // mutate({"data":data})
        // Tanstack Query was wasting my time :)
        // Toast notification
        toaster("🙂 Your card has been edited.")
    }

  return (
    <>
    <ToastContainer />
    {/* Dashborad nav */}
    <nav className='flex list-none py-6 flex-col md:flex-row px-10 md:px-32'>
          <li ><Link to='/profile' className='pr-2 mr-2 border-b hover:border-b-green-600' >Dashbord</Link></li>
          <li ><Link to='/profile/appointments' className='px-2 mx-2 border-b hover:border-b-green-600 ' >Appointments</Link></li>
          <li ><Link to='/profile/myprofile' className='px-2 mx-2 border-b hover:border-b-green-600 ' >My Profile</Link></li>
          <li ><Link to='/profile/medical-card' className='px-2 mx-2 border-b hover:border-b-green-600 ' >Medical Card</Link></li>
        </nav>
    <div className='px-10 md:px-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        
        <div>
            <h1 className='p-2 text-xl '>Edit medical card</h1>
            <form 
            action="" 
            className='flex flex-col gap-2 py-6' 
            onSubmit={handleSubmit(submitHandler)}
            >
                <label htmlFor="name" className='p-2'>
                    Name:
                </label>
                <input  
                id="name"
                type="text" 
                placeholder='John Doe'
                {...register('name', {
                    required: "Username is required!!",
                })}
                className='p-2 border-green-400 rounded-xl'
                 />
                <p className='text-red-500 text-xs'>{errors.name?.message}</p>
                <label htmlFor="address" className='p-2'>
                    Address:
                </label>
                <input  
                id="address"
                type="text" 
                placeholder='13, kutu wenji street, Ikeja, Lagos, Nigeria'
                {...register("address", {
                    required: "Address is required!!",
                })}
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.address?.message}</p>
                <div className='grid grid-cols-4'>
                    <label htmlFor="yob" className='p-2'>
                        Date of Birth:
                    </label>
                    <input  
                    id='yob'
                    type="date"
                    {...register("yob", {
                        required: "Date Of Birth is required!!",
                    })}
                    className='p-2 border-green-400 rounded-xl'
                    />
                    <p className={`text-red-500 text-xs ${!errors.yob ? 'hidden': 'block'}`}>{errors.yob?.message}</p>
                    <label htmlFor="bg" className='p-2'>
                        Blood Group:
                    </label>
                    <select 
                    id="bg"
                    {...register("id", {
                        required: "Blood Group is required!!",
                    })}
                    className="p-2 border-green-400 rounded-xl">
                      <option value="O">O</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                    </select>
                    <p className='text-red-500 text-xs'>{errors.bg?.message}</p>
                </div>
                <div className='grid grid-cols-4'>
                    <label htmlFor="bmi" className='p-2'>
                        BMI:
                    </label>
                    <input  
                    id='bmi'
                    type="text"
                    placeholder='e.g 20'
                    {...register("bmi", {
                        required: "BMI is required!!",
                    })}
                    className='p-2 border-green-400 rounded-xl'
                    />
                    <p className={`text-red-500 text-xs ${!errors.yob ? 'hidden': 'block'}`}>{errors.bmi?.message}</p>
                    <label htmlFor="bg" className='p-2'>
                        Blood Type:
                    </label>
                    <select 
                    id="bt"
                    // {...register("bt", {
                    //     required: "Blood Type is required!!",
                    // })}
                    className="p-2 border-green-400 rounded-xl">
                      <option value="O">O</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                    </select>
                    <p className='text-red-500 text-xs'>{errors.bt?.message}</p>
                </div>
                <label htmlFor="number" className='p-2'>
                    Phone number:
                </label>
                <input  
                id="number"
                type="text" 
                placeholder='08111111111'
                {...register("number", {
                    required: "Phone number is required!!",
                })}
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.number?.message}</p>
                <button
                className='p-2 bg-green-600 hover:bg-green-800 text-white rounded-xl'
                >Submit</button>
            </form>
        </div>
        {/* <DevTool control={control} /> */}
        <div>
            <h1 className='text-xl py-2'>Your medical data is important!!</h1>
            <p className='text-md'>A medical card is a document that identifies a person as eligible for medical care and treatment. It serves as proof of insurance and allows individuals to access medical services without paying out of pocket. Medical cards are particularly important for people with chronic illnesses or those who require regular medical attention. Without a medical card, individuals may face significant financial burdens in the form of high medical bills.</p>
        </div>
    </div>
    </>
  )
}

export default MedicalCardDetails