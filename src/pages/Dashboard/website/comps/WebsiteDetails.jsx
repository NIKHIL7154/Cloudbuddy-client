
const WebsiteDetails = (props) => {
  const {item}= props
  
  const handleVisit=()=>{
    
  }

  const handleDelete=()=>{
    
  }
  return (
    <div className="h-[80px] my-3 w-full flex rounded-3xl shade  px-3 items-center">
      <div className="name w-[30%]">
      <p className="text-2xl ">{item.name}</p>
      </div>
      <div className="content w-[70%] items-center flex justify-between">
      <p>{item.date}</p>
        <p>{item.status? 'Active' : 'Inactive'}</p>
        
        <div className="flex gap-2">
          <button onClick={handleVisit} className="btnx px-4 p-1 rounded-2xl">Visit</button>
          <button onClick={handleDelete} className="btnx px-4 p-1 rounded-2xl">Delete</button>
        </div>
      </div>
        
        
      </div>
  )
}

export default WebsiteDetails
