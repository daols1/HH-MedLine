import './App.css'
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import BookAnAppoinment from './components/BookAnAppoinment/BookAnAppoinment'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import NotFound from './components/NotFound/NotFound'
import ProfileApointments from './components/ProfileApointments/ProfileApointments'
import MyProfile from './components/MyProfile/MyProfile'

function App() {

  return (
    <div className="App">
      {/* Routes for pages */}
      <Routes >
        <Route path='/' element={<SharedLayout />} >
          <Route index element= {<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/dashboard' element={<Profile />} />
          <Route path='/profile/appointments' element={<ProfileApointments />} />
          <Route path='/profile/myprofile' element={<MyProfile />} />
          <Route path='/book-an-appointment' element={<BookAnAppoinment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes >
    </div>
  )
}

export default App
