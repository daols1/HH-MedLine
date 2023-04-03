import './App.css'
<<<<<<< HEAD
import BookAppointment from './pages/BookAppointment'

function App() {

  console.log(import.meta.env.VITE_Firebase_Api_Key)

  return (
   <div className="w-full">
    <BookAppointment/>
     </div>
=======
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import BookAnAppoinment from './components/BookAnAppoinment/BookAnAppoinment'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <div className="App">
      {/* Routes for pages */}
      <Routes >
        <Route path='/' element={<SharedLayout />} >
          <Route index element= {<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/book-an-appointment' element={<BookAnAppoinment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes >
    </div>
>>>>>>> e7c17e6373c5957a17e561ed4fb95d176a4f2ac3
  )
}

export default App
