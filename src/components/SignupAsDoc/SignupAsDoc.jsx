import { useForm } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';





function SignupAsDoc() {

    // Naviagtion onSucces of form submission.

    const navigate = useNavigate()

    // Form validation logic with react hook form
    const {register, handleSubmit, control, formState, reset } = useForm()
    const { errors, isValid } = formState

    // State for file

    const [file, setFile] = useState()

    const submitHandler = (data) => {
        // Post to backend.
        const dataReal = {
            "data":data
        }

        console.log(data)

        const formData = new FormData()

        formData.append('file', data.file[0])

        console.log(dataReal)
        // Post picture first.
        const postRequest = async () => {
            // Post pic.
            // let file = new dataReal()
            // file.append
            // Post form data.
            const posted = await axios.post("http://localhost:1337/api/doctors/", dataReal)
            console.log(posted.data)
            // .then(response => {
            //     console.log(response.data)
            // })
        }

        // Pic post

        const picPost = async () => {
            const post = await axios.post("http://localhost:1337/api/upload/", formData)
            console.log(post.data)
        }

        const combine = () => {
            postRequest()
            picPost()
        }

        toast.promise(
            postRequest
            ,{
                pending: "Signing Up...", 
                success: "Done!",
                error:"You no get good network"
            }
        )

        // axios.post("http://localhost:1337/api/doctors/", dataReal)
        //     .then(response => {
        //         console.log(response.data)
        //     })
        // Clear form state.
        reset()
        // Redirect the user.
        data && setTimeout(() =>{
            navigate('/')
        }, 7000)
        
    }



  return (
    <>
    <ToastContainer />
    <div className='px-10 md:px-32 grid grid-cols-1 md:grid-cols-2 py-6'>
        <div>
            {/* Form for sign up */}
            <form className='flex flex-col gap-2' onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Obiangeli' 
                {
                    ...register("name", {
                        required:"This field is required!!",
                    })
                }
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.name?.message}</p>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder='example@mail.com' 
                {
                    ...register("email", {
                        required:"This field is required!!",
                        pattern: {
                            value: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
                            message: "Please input a valid email."
                        },
                    })
                }
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.email?.message}</p>
                <label htmlFor="location">Location:</label>
                <input 
                type="text" 
                name="location" 
                id="location" 
                placeholder='Lagos' 
                {
                    ...register("location", {
                        required:"This field is required!!",
                    })
                }
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.location?.message}</p>
                <label htmlFor="subLocation">Sub Location:</label>
                <input 
                type="text" 
                name="subLocation" 
                id="subLocation" 
                placeholder='Ikeja' 
                {
                    ...register("subLocation", {
                        required:"This field is required!!",
                    })
                }
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.subLocation?.message}</p>
                <label htmlFor="specialty">Specialty:</label>
                <input 
                type="text" 
                name="specialty" 
                id="specialty" 
                placeholder='Charm studies' 
                {
                    ...register("specialty", {
                        required:"This field is required!!",
                    })
                }
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.specialty?.message}</p>
                <label htmlFor="hospitalName">Hospital Name:</label>
                <input 
                type="text" 
                name="hospitalName" 
                id="hospitalName" 
                placeholder='Mobonike Hospital' 
                {
                    ...register("hospitalName", {
                        required:"This field is required!!",
                    })
                }
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.hospitalName?.message}</p>
                <label htmlFor="description">Short Description:</label>
                <textarea
                type="text" 
                name="description" 
                id="description" 
                placeholder='A doctor who loves playing with peoples destiny' 
                {
                    ...register("description", {
                        required:"This field is required!!",
                    })
                }
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.description?.message}</p>
                <label htmlFor="specialty">Picture:</label>
                <input 
                type="file" 
                name="file" 
                id="file" 
                onChange={(e) => setFile(e.target.files)}
                {
                    ...register("file", {
                        required:"Upload Your pic mister man",

                    })
                }
                className='p-2 border-green-400 rounded-xl'
                />
                <p className='text-red-500 text-xs'>{errors.file?.message}</p>
                <button
                className='p-2 bg-green-600 hover:bg-green-800 text-white rounded-xl'
                >Submit</button>
            </form>
        {/* <DevTool control={control} /> */}
        </div>
        {/* Second part of the grid */}
        <div>
            {/* Random text */}

        </div>
    </div>
    </>
  )
}

export default SignupAsDoc