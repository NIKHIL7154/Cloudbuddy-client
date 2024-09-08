import React, { useState } from 'react'

const HomeNavigationDisplay = () => {
    const [selected, setSelected] = useState("home");

    return (
      <div className=" p-12">
  <div className="flex justify-center mb-12">
    <div className="max-w-md text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Navigation</h2>
      <p className="text-xl text-gray-500 mb-4">Explore the three navigation options available in this app.</p>
    </div>
  </div>
  <div className="flex flex-wrap justify-center gap-6 mb-12">
    <div className="w-full md:w-1/3 xl:w-1/3 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <svg className='m-auto' width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22L2 22" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M4 22V9.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 9.5V13.5M20 22V17.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z" stroke="#1C274C" strokeWidth="1.5"></path> </g></svg>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Home</h3>
        <p className="text-gray-500">You are currently here. Visit your creations and their statuses.</p>
      </div>
    </div>
    <div className="w-full md:w-1/3 xl:w-1/3 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <svg className='m-auto' width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path><path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line><line x1="32" y1="6.99" x2="32" y2="56.7"></line><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path></g></svg>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Websites</h3>
        <p className="text-gray-500">Browse your list of websites and manage them efficiently.</p>
      </div>
    </div>
    <div className="w-full md:w-1/3 xl:w-1/3 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <svg className='m-auto' width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Upload</h3>
        <p className="text-gray-500">Upload your website and go live with a single click.</p>
      </div>
    </div>
  </div>
</div>

  );
}

export default HomeNavigationDisplay
