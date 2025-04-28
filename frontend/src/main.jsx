import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { UserDataContextProvider } from './context/UserContext.jsx'
import CaptainContext from './Context/CaptainContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
   <UserDataContextProvider>
   <BrowserRouter>
    <App />
    </BrowserRouter>
   </UserDataContextProvider>
    </CaptainContext>
  </StrictMode>,
)
