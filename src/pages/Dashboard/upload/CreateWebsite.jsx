import { useContext, useState } from "react"
import { ToastAPI } from "../../../contexts/ToastContext";
import formInputData from "./comps/formInputData";
import { isValidGitUrl } from "../../../helpers/TextValidators";
import verifyFiles from "./comps/verifyFiles";
import { createPayload } from "../../../helpers/helper";
import { createPostRequest, uploadFilesRequest } from "../../../helpers/Customs";
import jsonanimation from '../../../assets/azp.json';
import Lottie from 'lottie-react';
import { useNavigate } from "react-router-dom";
import UploadStatus from "./comps/UploadStatus";
import GitProjectUpload from "./comps/GitProjectUpload";



const CreateWebsite = () => {
    const navigate = useNavigate()
    const [formData, setformData] = useState({ name: "", projectType: "", gitUrl: "", files: "" });
    const [uploadState, setuploadState] = useState(false);
    const [showLoader, setshowLoader] = useState(false);
    const [uplodStateDialog, setuplodStateDialog] = useState({state:true,url:""});
    const handleWebsiteName = (e) => {
        if (e.target.value.length > 4) {
            setformData({ ...formData, name: e.target.value })
        } else {
            setformData({ ...formData, name: e.target.value, projectType: "", gitUrl: "", files: "" })
        }
    }
    const Toast = useContext(ToastAPI)[1]


    const formInputs = formInputData(formData, setformData, handleWebsiteName)

    const handleCreateWebsite = async () => {
        if (formData.projectType == "html") {
            setshowLoader(true)
            const res = await verifyFiles(formData.files)
            if (!res) {
                Toast({ message: "index.html is not present in your selected folder", type: "error", state: true })
                return
            }
            console.log(formData.files)
            try {
                const payload = createPayload(formData.files)
                const urlResponse = await createPostRequest('/multiupload', { data: payload })
                console.log(urlResponse)
                const uploadResult = await uploadFilesRequest(urlResponse.data.Urls, formData.files)
                console.log(uploadResult)
                
                const addWebsiteResult =await createPostRequest("/addwebsite", {data:{ webname: formData.name, webid: urlResponse.data.id }})
                console.log(addWebsiteResult)

                if (addWebsiteResult.code == 200) {
                    Toast({ message: "Upload success", type: "success", state: true })
                }
                setuplodStateDialog({state:false,url:urlResponse.data.endpoint})

            } catch (error) {
                if (error.code == 401) {
                    Toast({ message: "Token expired login again", type: "error", state: true })
                    setTimeout(() => {
                        navigate("/auth/login")
                    }, 500);
                }
                Toast({ message: "Some error occured! Please try again", type: "error", state: true })
                console.log(error)
                setshowLoader(false)

            }

            return
        }

        if (formData.gitUrl != "" && !isValidGitUrl(formData.gitUrl)) {
            Toast({ message: "Please enter a valid Git repository URL.", type: "error", state: true })
            return
        }
        Toast({ message: "Git url verified", type: "success", state: true })
        setuploadState(true)
    }
    const mainComponent = (<div className='w-full h-full flex items-center justify-start flex-col gap-4 text-2xl'>
        <Lottie className="h-[40%]" animationData={jsonanimation} loop={true} />
        <p className="text-center">Start by entering the name of your new website</p>
        {showLoader && <UploadStatus data={uplodStateDialog} />}
        {formInputs.websiteName}
        {formData.name.length > 4 && formInputs.projectType}
        {formData.projectType == "html" && formInputs.fileInput}
        {formData.projectType == "react" && formInputs.gitUrl}
        

        {(() => {
            if (formData.gitUrl.length > 10 || formData.files != "") {
                return <button className="btnx rounded-lg p-3 text-md" onClick={handleCreateWebsite}>Create Website</button>
            }
            return <></>
        })()}



    </div>)
    if (uploadState) {
        return <GitProjectUpload formData={formData} />
    } else {
        return mainComponent
    }
}

export default CreateWebsite
