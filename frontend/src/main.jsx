import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserContext from './Context/UserContext.jsx';
import CaptainContext from './Context/CaptainContext.jsx';
import SocketProvider from './Context/SocketContext.jsx';


createRoot(document.getElementById('root')).render(
  <SocketProvider>
    <CaptainContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </CaptainContext>
  </SocketProvider>
);