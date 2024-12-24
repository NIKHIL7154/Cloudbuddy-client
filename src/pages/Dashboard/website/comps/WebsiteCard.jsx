import { useContext, useEffect } from "react";
import { createPostRequest } from "../../../../helpers/Customs";
import { useNavigate } from "react-router-dom";
import { ToastAPI } from "../../../../contexts/ToastContext";


const WebsiteCard = (props) => {
    const { name, date, status, url, id, gitUrl } = props.item
    const {cb }=props
    const number = Math.floor(Math.random() * 100)
    const navigate=useNavigate();
    const handleVisit = () => {
        window.open(url, '_blank').focus();
    }
    const Toast=useContext(ToastAPI)[1];

    const handleDeleteButton= async ()=>{
        try {
            const deleteWebsiteActionResponse= await createPostRequest("/deletewebsite",{websiteid:id})
            if(deleteWebsiteActionResponse.code==200){
                Toast({message:"Website deleted successfully",state:true,type:"success"})
                console.log("Deleted")
                cb()
            }
        } catch (error) {
            if(error.code==401){
                navigate("/auth/login")
                Toast({message:"Your session has been expired. Please login again",state:true,type:"error"})
                return;
            }
            Toast({message:"Something went wrong! Please try again.",state:true,type:"error"})
            console.log(error)
            
        }
    }
    return (


        <div className="w-[400px] h-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <img loading="lazy" className="rounded-t-lg mb-[-20px] m-auto h-[250px]" src={`https://doodleipsum.com/500x500/hand-drawn?n=${number}`} /* src="https://doodleipsum.com/700x394/hand-drawn?i=48e97fc8b74cbbbf67cd3ddb6e0bd6b6" */ alt="" />
            </div>
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </div>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Created on : {date}</p>
                <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">Link : {url}</p>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">ID : {id} <br /> Status : {status ? "Active" : "Not Active"}</p>
                <button onClick={handleVisit} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Visit now
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
                <button onClick={handleDeleteButton} className="ml-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black hover:text-black border border-black rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Delete ❌
                </button>
                {gitUrl != "" && <button className="relative redeploy-msg ml-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Re-Deploy🔁
                </button>}
            </div>
        </div>

    )
}

export default WebsiteCard
