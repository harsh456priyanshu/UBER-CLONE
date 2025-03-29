import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import UserSignup from './Pages/UserSignup'
import UserLogin from './Pages/UserLogin'
import Captainlogin from './Pages/Captainlogin'
import CaptainSignup from './Pages/CaptainSignup'

const App = () => {

  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup />}/ >
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
      </Routes>
    </div>
  )
}

export default App