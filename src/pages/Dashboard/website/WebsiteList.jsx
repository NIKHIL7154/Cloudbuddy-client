import axios from "axios"
import './Website.css'
import WebsiteDetails from "./comps/WebsiteDetails"
import { useState, useEffect } from "react"
import WebsiteCard from "./comps/WebsiteCard"
import { HOST } from "../../../helpers/Variables"
import { getTokenValue, isValidToken } from "../../../helpers/SecureCheck"
import { useNavigate } from "react-router-dom"

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
    
    if(response.data.length<1){
      return
    }
    setWebsites(response.data)
  }
  useEffect(() => {
    fetch_websites()
    return () => {

    };
  }, []);

  const [Websites, setWebsites] = useState();
  return (
    <div className="h-full flex items-center flex-col">
      <div className=" w-full flx">
        <p className="text-3xl text-center py-4">Your websites</p>

      </div>
      <div className="w-[90%] border my-2"></div>
      <div className={`w-[90%] gap-4 px-4 py-2 ${Websites?"grid grid-cols-4":"flx"} custom-scroll-bar overflow-y-auto`}>

        {Websites ?
          <>
            {Websites.map((item) => {
              return <WebsiteCard key={item.id} item={item} />
            })}

          </> : <p>You haven&apos;t created any website yet. Try creating your first website😊</p>}
      </div>
    </div>
  )
}

export default WebsiteList
