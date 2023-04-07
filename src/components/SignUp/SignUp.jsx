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

  return (
    <div className=' px-10 md:px-32 '>
      <header>
        <div className='text-center py-8'>
          <p className='text-5xl font-extrabold pb-2'>Welcome Back!</p>
          <p className='text-2xl'>
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
  )
}

export default SignUp
