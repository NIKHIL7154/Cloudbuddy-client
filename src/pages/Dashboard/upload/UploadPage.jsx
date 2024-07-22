import axios from "axios"
import { useRef, useState } from "react"
import { HOST } from "../../../helpers/Variables"
import { TextField } from "@mui/material";



const UploadPage = () => {
  const [endpoint, setendpoint] = useState("");
  const [upload, setupload] = useState();
  const [files ,setfiles] = useState([])
  const websiteName=useRef()
  
  const handleUpload= async()=>{
    let file=files
    if(file.length<1){
      alert("Please select a folder")
    }else{
      console.log(file)
      let payload=[]
      let homeNotFound=true
      for(let i=0; i<file.length;i++){
        if(file[i].name=="index.html"){
          homeNotFound=false;
        }
        let path=file[i].webkitRelativePath
        path=path.substring(path.indexOf("/")+1)
        payload.push({name:file[i].name,type:file[i].type,dir:path})
      }
      
      console.log(payload)
      if(homeNotFound){
        alert("index.html not present in root directory"
        )
        return
      }
      
      const resp = await axios.post(HOST+'/multiupload',{data:payload})
      console.log(resp)
      const URLS = resp.data.Urls
      let uploadStatus=true
      for(let i=0;i<URLS.length;i++){

        const rep=await axios.put(URLS[i],file[i],{headers: {
          'Content-Type': file[i].type
        },onUploadProgress})
        if(rep.status!=200){
          alert("Error uploading file! Please upload again.")
          uploadStatus=false
          break
        }
      }
      
      if(uploadStatus){
        const DBstatus=await axios.post(HOST+"/addwebsite",{name:websiteName.current.value,id:resp.data.id})
        if(DBstatus.status!=200){
          alert("Error adding website! Please try again")
          return
        }
        alert("Files uploaded successfully")

        console.log(resp.data.endpoint)
        setendpoint(resp.data.endpoint)
      
      }
    }
    
  }
  const onUploadProgress = (progressEvent) => {
    const { loaded, total } = progressEvent;
    let percent = Math.floor((loaded * 100) / total);
    if (percent < 100) {
      //console.log(`${loaded} bytes of ${total} bytes. ${percent}%`);
      setupload(`${loaded} bytes of ${total} bytes. ${percent}%`)
    }
  };

  return (
    <div className="w-full flx ">
      <div>
      <p className="text-3xl mt-16">Create a new website✏️</p>
      <p className="text-xl mt-4">Enter the name of your website:</p>
      <TextField ref={websiteName} margin='normal' className='w-[80%]' color='primary' id="outlined-basic" name="name" label="Website name" variant="outlined" />
			<p className="mt-4">Select the root folder of your website (That contains index.html)</p>
      <input id="file-upload-input" className="hidden" onChange={(e)=>{setfiles(e.target.files)}}  placeholder="Select folder" type="file" multiple webkitdirectory="true"/>
      <div className="flex items-center my-8">
      <button onClick={()=>{document.getElementById("file-upload-input").click()}} className="text-white hover:bg-[#1eff05] hover:text-black p-3 bg-[#f61b1b] rounded-2xl">Select folder </button>
      <p className="ml-5">{files.length?`Folder name: ${files[0].webkitRelativePath.split("/")[0]} Files: ${files.length}`:"No folder chosen"}</p>
      </div>
      <button onClick={handleUpload} className="btnx p-2 px-20 rounded-md">Create</button>
      </div>
      <iframe className="w-[40%] h-[400px]" src="https://lottie.host/embed/5b6a964a-8efd-4c8f-bda7-185ec4b5729c/hTacCpBG34.json"></iframe>
      </div>

  )
}

export default UploadPage
