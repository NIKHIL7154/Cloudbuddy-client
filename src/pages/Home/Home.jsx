import React from 'react'
import homeGif from "../../assets/home.gif"
import { useNavigate } from 'react-router-dom'
import { HOST } from '../../helpers/Variables'

const Home = () => {
  const navigate= useNavigate()
  console.log(HOST)
  return (
    <div className='sized home-gradient'>
      <div className="w-full flx pt-[100px] flex-col">
      <img src={homeGif} alt="" />
        <p className='text-[60px] fonte font-bold text-[#000000]'>CloudBuddy</p>
      </div>
      <div className="w-full flx flex-col">
        <p className='fonte'>Your free website hosting provider.</p>
        <button onClick={()=>{navigate('/auth/login')}} className='btnx p-3 mt-8 fonte'>Get Started</button>
      </div>
      
      
    </div>
  )
}

export default Home
