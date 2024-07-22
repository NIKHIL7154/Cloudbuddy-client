

import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Auth/Signup'
import ForgotPass from './pages/Auth/ForgotPass'
import { useState } from 'react'
import { ToastAPI } from './contexts/ToastContext'
import Dashboard from './pages/Dashboard/Dashboard'
import AlertToast from './components/AlertToast'
import { CookiesProvider } from 'react-cookie';
function App() {
  const [toast, settoast] = useState({message:"",state:false,type:"error"})

  return (
    <div>
     
    <ToastAPI.Provider value={[toast,settoast]}>
    <AlertToast/>
    <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auth'>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='password' element={<ForgotPass />}></Route>
        </Route>
        <Route path='/app/*' element={<Dashboard/>}>
          
          
        </Route>
      </Routes>
    </BrowserRouter>
    </CookiesProvider> 
    </ToastAPI.Provider>
    </div>
  )
}

export default App
