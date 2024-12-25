


import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Auth/Signup'
import ForgotPass from './pages/Auth/ForgotPass'
import { useState } from 'react'
import { ToastAPI } from './contexts/ToastContext'
import Dashboard from './pages/Dashboard/Dashboard'
import AlertToast from './components/AlertToast'

import { GoogleOAuthProvider } from '@react-oauth/google';
import NewHome from './pages/Mainhome/pages/home'



function App() {
  const [toast, settoast] = useState({message:"",state:false,type:"error"})
  const gid= import.meta.env.VITE_META_GOOGLE_CLIENT
  
  return (
    <div>
     <GoogleOAuthProvider clientId={gid}>
    <ToastAPI.Provider value={[toast,settoast]}>
    <AlertToast/>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewHome/>}></Route>
        
        <Route path='/dems' element={<Home/>}></Route>
        <Route path='/auth'>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='password' element={<ForgotPass />}></Route>
        </Route>
        <Route path='/app/*' element={<Dashboard/>}>
          
          
        </Route>
      </Routes>
    </BrowserRouter>
     
    </ToastAPI.Provider>
    </GoogleOAuthProvider>
    </div>
  )
}

export default App
