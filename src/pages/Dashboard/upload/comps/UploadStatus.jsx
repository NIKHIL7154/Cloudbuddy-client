import React from 'react'
import { useNavigate } from 'react-router-dom';

const UploadStatus = (props) => {
    const {data}=props;
    const navigate = useNavigate()
    const handleVisitWebsite=()=>{
        window.open(data.url, '_blank').focus();
    }
    
  return (
    <div className='absolute flx m-0 w-full top-0 left-0 z-10 h-full bg-[#00000054]'>
        {data.state?
        <div className="w-[450px] h-[350px] flx flex-col rounded-lg bg-white">
        <img className='h-[75%]' src="https://cdn.dribbble.com/users/3960415/screenshots/8995365/media/b0b5dddc53e15f8eb666502c9c3cb5d4.gif" alt="" />
        <p className='text-lg'>Please wait while your website is being created😊</p>
        </div>:
        <div className="w-[450px] h-[400px] flx flex-col rounded-lg bg-white">
        <img className='h-[70%]' src="https://miro.medium.com/v2/1*CSkLBSd5e9x3-n4kikV9ZA.gif" alt="" />
        <p className='text-lg'>Website created successfully.</p>
        <div className='my-4'>
        <button onClick={handleVisitWebsite} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Visit now
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        <button onClick={()=>navigate("/app/websites")} className="ml-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Back to websites
        </button>
        </div>
        </div>}
      
    </div>
  )
}

export default UploadStatus
