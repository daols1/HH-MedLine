import React, { useState } from 'react'
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import signupImg from '../../assets/signup/signupImg.png'
import { motion } from 'framer-motion'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  // Formik Logics
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      remember: '',
    },

    // Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Name must be 20 characters or less')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(4)
        .max(20)
        .required('password should not be less than four letters'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
    }),

    // submit form
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Create a new user account with Firebase Auth
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        )
        // Update the user's display name with the provided name
        const user = userCredential.user

        updateProfile(auth.currentUser, {
          displayName: values.name,
        })

        navigate('/')
        // Log the user in
        const docRef = doc(db, 'users', user.id)
        await setDoc(docRef, {
          ...values,
          timestamp: serverTimestamp(),
        })
      } catch (error) {
        // Handle any errors that occur during sign up
        // ...
      } finally {
        setSubmitting(false)
      }
    },
  })

  console.log(formik.errors)

  // Form validation logic for Sign upm as a Doc

  const docSignUpHandler = (e) => {
    e.preventDefault()
  }



  return (
    <div className=' px-10 md:px-32  grid grid-cols-1 md:grid-cols-2 gap-8 py-20'>
      <div>
      <header>
        <div className='text-center py-8'>
          <p className='text-3xl font-extrabold pb-2 md:text-5xl'>Welcome Back!</p>
          <p className='text-xl md:text-2xl'>
            Please enter your contact email to connect.
          </p>
        </div>
      </header>

      <main className=' '>
        <form onSubmit={formik.handleSubmit} className='bg-white rounded-lg '>
          <div className='mt-6'>
            {/* Name input field */}
            <div className='pb-4'>
              <label
                className={`block text-lg pb-2 ${
                  formik.touched.name && formik.errors.name
                    ? 'text-red-500'
                    : ''
                }`}
                htmlFor='name'
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : 'Name'}
              </label>
              <input
                className='border-2 border-green-500 p-4 rounded-md w-full focus:border-teal-500 focus:ring-teal-500'
                type='text'
                name='name'
                id='name'
                placeholder='Enter your name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Email input field */}
            <div className='pb-4'>
              <label
                className={`block text-lg pb-2 ${
                  formik.touched.email && formik.errors.email
                    ? 'text-red-500'
                    : ''
                }`}
                htmlFor='email'
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : 'Email'}
              </label>
              <input
                className='border-2 border-green-500 p-4 rounded-md w-full focus:border-teal-500 focus:ring-teal-500'
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Password */}
            <div className='pb-4 relative'>
              <label
                className={`block text-lg pb-2 ${
                  formik.touched.password && formik.errors.password
                    ? 'text-red-500'
                    : ''
                }`}
                htmlFor='password'
              >
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : 'Password'}
              </label>
              <input
                className='border-2 border-green-500 p-4 rounded-md w-full focus:border-teal-500 focus:ring-teal-500'
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Enter your password'
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <img
                src={visibilityIcon}
                alt='show-password'
                className='cursor-pointer absolute top-14 left-[95%]'
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            {/* confirmPassword */}
            <div className='pb-4 relative'>
              <label
                className={`block text-lg pb-2 ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? 'text-red-500'
                    : ''
                }`}
                htmlFor='confirmPassword'
              >
                {formik.touched.confirmPassword && formik.errors.password
                  ? formik.errors.confirmPassword
                  : 'Confirm Password'}
              </label>
              <input
                className='border-2 border-green-500 p-4 rounded-md w-full focus:border-teal-500 focus:ring-teal-500'
                type={showPassword ? 'text' : 'password'}
                name='confirmPassword'
                id='confirmPassword'
                placeholder='Enter  password again'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <img
                src={visibilityIcon}
                alt='show-password'
                className='cursor-pointer absolute top-14 left-[95%]'
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            {/* Remember me*/}
            <div className='pb-4 flex items-center gap-2'>
              <div>
                <input
                  type='checkbox'
                  name='remember'
                  value='checked'
                  className='h-5 w-5 text-green-500 border-2 focus:border-green-500 focus:ring-green-500'
                  onChange={formik.handleChange}
                />
              </div>
              <label className='block  pb-2 text-lg mt-3' htmlFor='remember'>
                Remember me
              </label>
            </div>
            <button
              type='submit'
              className='bg-green-500 focus:border-green-500 focus:ring-green-500 hover:bg-opacity-90 transition-all duration-300 text-2xl text-white py-4 rounded-lg w-full '
            >
              Sign up
            </button>
            <button
              type='submit'
              className='mt-6 bg-white border-2 text-green-500 hover:bg-opacity-90 transition-all duration-300 text-2xl  py-4 rounded-lg w-full '
            >
              Continue with google
            </button>
          </div>
          <div className='text-center mt-6 pb-4'>
            <p className='text-2xl'>
              Already have an account?{' '}
              <Link to='/login' className='text-green-500 font-bold'>
                Sign in instead
              </Link>
            </p>
          </div>
        </form>
      </main>
      </div>
      {/* Random text side */}
      <div className='py-3 self-center text-center relative'>
        <h2 className='text-3xl py-2'>We would love to have you here</h2>
        <p>Kindly follow the propts and Sign Up / Sign In</p>
        <img src={signupImg} alt="" />
        <motion.div 
        initial={{
          x:0,
          y:0,
          scale:0,
        }}
        animate={{
          x:[0, 40, 0],
          y:[0, 120, 0],
          scale:[0, 1.2, 1.1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          // type: "spring", 
          stiffness: 20,
          repeat: Infinity,
          // damping:80,
          
        }}
        className='absolute md:w-40 w-20 md:h-40 h-20 backdrop-blur-3xl opacity-75 bg-green-200 rounded-full border border-green-400 top-4 right-0 overflow-hidden'></motion.div>
        <motion.div 
        initial={{
          x:0,
          y:0,
          scale:0,
        }}
        animate={{
          x:[0, 80, 0],
          y:[0, -70, 0],
          scale:[0, 1.2, 1.5, 1.2, 1.3, 1],
        }}
        transition={{
          duration: 10,
          // type: "spring", 
          stiffness: 20,
          repeat: Infinity,
          // damping:80,
          
        }}
        className='absolute md:w-20 w-10 md:h-20 h-10 backdrop-blur-xl opacity-75 bg-green-200 border-green-400 rounded-full bottom-0 left-0'></motion.div>
        {/* <motion.div 
        initial={{
          x:0,
          y:0,
          scale:0,
        }}
        animate={{
          x:[0, 240, 0],
          y:[0, 220, 0],
          scale:[0, 1.2, 1.5, 1.2, 1.3, 1],
        }}
        transition={{
          duration: 5,
          // type: "spring", 
          stiffness: 20,
          repeat: Infinity,
          delay:2,
          // damping:80,
          
        }}
        className='absolute w-20 h-20 blur opacity-75 bg-green-200 rounded-full border border-green-800 top-0 left-0'></motion.div> */}
        {/* <div className='absolute w-30 h-30 blur opacity-75 bg-green-200 rounded-full border border-green-800 top-4 left-4'></div> */}
      </div>
    </div>
  )
}

export default SignUp
