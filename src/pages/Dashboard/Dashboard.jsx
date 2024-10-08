import {Route, Routes } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
//import Sidebar from "../../components/Sidebar/Sidebar"
import UploadPage from "./upload/UploadPage"
import WebsiteList from "./website/WebsiteList"
import DashHome from "./DashHome"



const Dashboard = () => {
  return (
    <div className="sized">
      <Navbar/>
      <div className="w-full flex h-[90%]">
        {/* <div className="w-[25%] bd">
          <Sidebar/>
        </div> */}
        <div className="w-[100%]">
          <Routes>
            <Route path="/" element={<DashHome/>}></Route>
            <Route path="upload" element={<UploadPage/>}></Route>
            <Route path="websites" element={<WebsiteList/>}></Route>
            
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
