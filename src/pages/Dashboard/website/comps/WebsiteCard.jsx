import { useEffect } from "react";


const WebsiteCard = (props) => {
    const {name,date,status,url} =props.item
    const number = Math.floor(Math.random()*10)
    const handleVisit=()=>{
        window.open(url, '_blank').focus();
    }
  return (
    

<div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
        <img loading="lazy" className="rounded-t-lg w-[60%]" src={`https://doodleipsum.com/500x500/hand-drawn?n=${number}`} /* src="https://doodleipsum.com/700x394/hand-drawn?i=48e97fc8b74cbbbf67cd3ddb6e0bd6b6" */ alt="" />
    </div>
    <div className="p-5">
        <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </div>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Created on : {date}</p>
        <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">Link : {url}</p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">ID : 74859 ℹ️ Status : {status?"Active":"Not Active"}</p>
        <button onClick={handleVisit} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visit now
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        <button className="ml-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Delete ❌
        </button>
    </div>
</div>

  )
}

export default WebsiteCard
