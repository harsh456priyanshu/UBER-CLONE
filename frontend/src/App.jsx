import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Start from './Pages/Start'
import UserSignup from './Pages/UserSignup'
import UserLogin from './Pages/UserLogin'
import Captainlogin from './Pages/Captainlogin'
import CaptainSignup from './Pages/CaptainSignup'
import Home from './Pages/Home'
import UserProtectedWrapper from './Pages/UserProtectedWrapper'
import UserLogout from './Pages/UserLogout'
import CaptainHome from './Pages/CaptainHome'
import CaptainProtectWrapper from './Pages/CaptainProtectWrapper'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
       <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App