import axios from "axios"
import { useContext, useRef, useState } from "react"
import { HOST } from "../../../helpers/Variables"
import { TextField } from "@mui/material";
import { ToastAPI } from "../../../contexts/ToastContext";
import { getTokenValue, isValidToken } from "../../../helpers/SecureCheck";
import { useNavigate } from "react-router-dom";
import UploadStatus from "./comps/UploadStatus";



const UploadPage = () => {
  //states to manage data
  const [endpoint, setendpoint] = useState("");
  const [upload, setupload] = useState();
  const [showLoading, setshowLoading] = useState(false);
  const [uploadCompleted, setuploadCompleted] = useState({state:true,url:"https://google.com"});

  const [files, setfiles] = useState([])
  const [websiteName, setwebsiteName] = useState("");
  const Toast = useContext(ToastAPI)[1]

  const navigate = useNavigate()

  const verifyData = () => {
    if (websiteName.length < 5) {
      Toast({ message: "Please enter a valid name for your website", type: "error", state: true })
      return
    }
    let file = files
    if (file.length < 1) {
      Toast({ message: "Please select an folder to upload", type: "error", state: true })
      return
    }
    if (!isValidToken) {
      Toast({ message: "No valid token found", type: "error", state: true })
      setTimeout(() => {
        navigate("/auth/login")
      }, 500);
      return;
    }
    handleUpload()
  }

  const handleUpload = async () => {
    let file = files
    let payload = []
    let homeNotFound = true
    for (let i = 0; i < file.length; i++) {
      if (file[i].name == "index.html") {
        homeNotFound = false;
      }
      let path = file[i].webkitRelativePath
      path = path.substring(path.indexOf("/") + 1)
      payload.push({ name: file[i].name, type: file[i].type, dir: path })
    }

    if (homeNotFound) {
      Toast({ message: "index.html is not present in your selected folder", type: "error", state: true })
      return
    }
    var uploadInfo = ""
    try {
      uploadInfo = await axios.post(HOST + '/multiupload', { data: payload })

    } catch (error) {
      Toast({ message: "Some error has been occured on our side " + error, type: "error", state: true })
      return
    }

    
    const URLS = uploadInfo.data.Urls

    setshowLoading(true)
    for (let i = 0; i < URLS.length; i++) {

      const rep = await axios.put(URLS[i], file[i], {
        headers: {
          'Content-Type': file[i].type
        }, onUploadProgress
      })
      if (rep.status != 200) {
        Toast({ message: "Uploading of your website has been failed please try again. upload fail", type: "error", state: true })

        setshowLoading(false)
        return;
      }
    }
    let WebsiteAddingStatus;
    try {
      WebsiteAddingStatus = await axios.post(HOST + "/addwebsite", {data:{ webname: websiteName, webid: uploadInfo.data.id }},{headers:
        {"Authorization": "Bearer " +getTokenValue()}
      })
    } catch (error) {
      console.log(error)
      Toast({ message: "Uploading of your website has been failed please try again. addwebsite fail", type: "error", state: true })
      setshowLoading(false)
      return;
    }

    if (WebsiteAddingStatus.status != 200) {
      Toast({ message: "Uploading of your website has been failed please try again. failed at final", type: "error", state: true })
      setshowLoading(false)
      return;
    }
    setuploadCompleted({state:false,url:WebsiteAddingStatus.data.endpoint})
  
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
    <div className="w-full flex items-center justify-evenly">
      {showLoading?<UploadStatus data={uploadCompleted} />:<></>}
      <div className="">
        <p className="text-3xl">Create a new website🚀</p>
        <p className="text-xl my-2">Enter the name of your creation:</p>
        <p className="text-[#6e6d6d] my-2 text-sm">Note - Website name should be unique to your account.</p>
        <TextField
          onChange={(e) => { setwebsiteName(e.target.value) }}
          margin='normal' className='w-[80%]' color='primary' id="outlined-basic" name="name" label="Website name" variant="outlined" />
        <p className="mt-2">Select the root folder of your website (That contains index.html)</p>
        <input id="file-upload-input" className="hidden" onChange={(e) => { setfiles(e.target.files) }} placeholder="Select folder" type="file" multiple webkitdirectory="true" />
        <div className="flex items-center my-6">
          <button onClick={() => { document.getElementById("file-upload-input").click() }} className="text-white hover:bg-[#1eff05] hover:text-black p-3 bg-[#f61b1b] rounded-2xl">Select folder </button>
          <p className="ml-5">{files.length ? `Folder name: ${files[0].webkitRelativePath.split("/")[0]} Files: ${files.length}` : "No folder chosen"}</p>
        </div>
        <button onClick={verifyData} className="btnx p-2 px-20 rounded-md">Create</button>
      </div>
      <img className="w-[50%]" src="https://cdn.dribbble.com/users/26540/screenshots/1423680/screengrab01.gif" alt="" />
    </div>

  )
}

export default UploadPage
