import {Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
//import Sidebar from "../../components/Sidebar/Sidebar"

import WebsiteList from "./website/WebsiteList"
import DashHome from "./DashHome"
import CreateWebsite from "./upload/CreateWebsite"
import { useEffect, useState } from "react"
import { createGetRequest } from "../../helpers/Customs"




const Dashboard = () => {
  const navigate=useNavigate();
  const [UserDetails, setUserDetails] = useState({name:""});
  
  useEffect(() => {
    async function verifyUser(){
      
      try {
        const userVerificationResponse= await createGetRequest("/verifyuser");
        setUserDetails(userVerificationResponse.data)
      } catch (error) {
        if(error.code==401){
          navigate("/auth/login")
        }
        console.log(error)
      }
    }

    verifyUser();
    return () => {
      
    };
  }, [navigate]);
  return (
    <div className="sized">
      <Navbar userdata={UserDetails}/>
      <div className="w-full flex h-[90%]">
        
        <div className="w-[100%] h-full">
          <Routes>
            <Route path="/" element={<DashHome/>}></Route>
            <Route path="create" element={<CreateWebsite/>}></Route>
            <Route path="websites" element={<WebsiteList/>}></Route>
            
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
