import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookAppointment from './pages/BookAppointment'

function App() {

  console.log(import.meta.env.VITE_Firebase_Api_Key)

  return (
   <div className="w-full">
    <BookAppointment/>
     </div>
  )
}

export default App
