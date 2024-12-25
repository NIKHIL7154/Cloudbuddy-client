import axios from "axios"


import { useState, useEffect } from "react"
import WebsiteCard from "./comps/WebsiteCard"
import { HOST } from "../../../helpers/Variables"
import { getTokenValue, isValidToken } from "../../../helpers/SecureCheck"
import { useNavigate } from "react-router-dom"
//import CreationCard from "../../../components/CreationCard"
import { motion } from 'framer-motion';
const WebsiteList = () => {
  
  const navigate=useNavigate()
  
  async function fetch_websites() {
    if(!isValidToken()){
      navigate("/auth/login")
      return;
    }
    
    const response = await axios.get(HOST + "/websites", {headers:{
      "Authorization": "Bearer " +getTokenValue() ,
    }})
    
    
    setWebsites(response.data)
  
  }
  useEffect(() => {
    
    fetch_websites()
    
  }, []);

  const [Websites, setWebsites] = useState([]);
  return (
    <div className="h-full flex items-center flex-col">
      <div className=" w-full flx">
        <p className="text-3xl text-center py-4">Your websites</p>

      </div>
      <div className="w-[90%] border my-2"></div>
      {Websites.length>0 ?<motion.div
      initial="hidden" 
      animate="visible" 
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
      }}
      className={`w-[90%]  px-4 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen gap-4 custom-scroll-bar overflow-y-auto`}>

        
            {Websites.map((item,index) => {
              return <WebsiteCard  key={index} item={item} cb={fetch_websites} />
              
            })}

      </motion.div>:<p>No websites to show. Try creating your first website😊</p>}
    </div>
  )
}

export default WebsiteList
