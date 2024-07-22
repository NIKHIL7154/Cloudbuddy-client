import {Route, Routes } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import UploadPage from "./upload/UploadPage"
import WebsiteList from "./website/WebsiteList"


const Dashboard = () => {
  return (
    <div className="sized">
      <Navbar/>
      <div className="w-full flex h-[91%]">
        <div className="w-[25%] bd">
          <Sidebar/>
        </div>
        <div className="w-[75%]">
          <Routes>
            <Route path="upload" element={<UploadPage/>}></Route>
            <Route path="websites" element={<WebsiteList/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
