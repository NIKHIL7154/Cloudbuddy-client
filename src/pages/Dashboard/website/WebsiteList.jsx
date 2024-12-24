import axios from "axios"


import { useState, useEffect } from "react"
import WebsiteCard from "./comps/WebsiteCard"
import { HOST } from "../../../helpers/Variables"
import { getTokenValue, isValidToken } from "../../../helpers/SecureCheck"
import { useNavigate } from "react-router-dom"
//import CreationCard from "../../../components/CreationCard"

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
      <div className={`w-[90%] gap-0 px-4 py-2 ${Websites.length>0?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen gap-4":"flx"} custom-scroll-bar overflow-y-auto`}>

        {Websites.length>0 ?
          <>
            {Websites.map((item,index) => {
              return <WebsiteCard key={index} item={item} cb={fetch_websites} />
              //return <CreationCard key={item.id} item={item}/>
            })}

          </> : <p>No websites to show. Try creating your first website😊</p>}
      </div>
    </div>
  )
}

export default WebsiteList
