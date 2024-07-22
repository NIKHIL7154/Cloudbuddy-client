import axios from "axios"
import './Website.css'
import WebsiteDetails from "./comps/WebsiteDetails"
import { useState,useEffect } from "react"
const WebsiteList = () => {
  async function fetch_websites(){
    const response = await axios.get("http://localhost:4000/websites")
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
      <div className="w-full flex justify-center gap-3 overflow-y-auto">
        {Websites?
        <div className="w-[80%]">
          {Websites.map((item)=>{
            return <WebsiteDetails key={item.id} item={item} />
          })}
      
      </div>:<p>You haven&apos;t created any website yet.</p>}
      </div>
    </div>
  )
}

export default WebsiteList
