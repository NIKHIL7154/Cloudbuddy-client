import { useEffect, useState } from 'react'
import Gitupload from "../../../../assets/gitupload.gif"
import TaskCompleted from '../../../../assets/completetask.gif'
import LoadingShapes from './LoadingShapes';
import { createPostRequest } from '../../../../helpers/Customs';
import { useNavigate } from 'react-router-dom';
import { HOST } from '../../../../helpers/Variables';

var curdata = ""
const GitProjectUpload = (props) => {
  const navigate = useNavigate()
  const [loadingIcon, setloadingIcon] = useState(Gitupload);
  const [projectStatus, setprojectStatus] = useState("Please wait while i am building your project.😊");
  
  
  const [deploymentUrl, setdeploymentUrl] = useState("");

  function extractUrlFromString(inputString) {
    const urlRegex = /(https?:\/\/[^\s]+)/g; // Regular expression to match URLs
    const matches = inputString.match(urlRegex); // Find matches in the input string
    return matches ? matches[0] : ""; // Return matches or an empty array if no URLs are found
  }
  useEffect(() => {
    const initiateProjectBuild = async () => {
      try {
        const gitUploadResponse = await createPostRequest("/task", { gitUrl: props.formData.gitUrl, name: props.formData.name })
        const taskId = gitUploadResponse.data.id
        const eventsource = new EventSource(HOST + '/task/' + taskId)
        eventsource.onmessage = (event) => {

          
          if (event.data == "ended") {
            setprojectStatus("Deployment process ended.")
            setdeploymentUrl(extractUrlFromString(curdata))
            setloadingIcon(TaskCompleted)
            eventsource.close()
            return;
          }
          curdata = JSON.parse(event.data)
          setprojectUpdates(JSON.parse(event.data))

        }
        eventsource.onerror = (event) => {
          eventsource.close()
          
        }
      } catch (error) {

        if (error.code == 401) {

          setTimeout(() => {
            navigate("/auth/login")
          }, 100);
        }
        console.log(error)
      }
    }
    initiateProjectBuild()
    return () => {

    };
  }, []);

  const [projectUpdates, setprojectUpdates] = useState("Project deployment is starting");
  return (
    <div className='flex items-center flex-col w-full h-full p-4'>
      <img className='w-[300px] md:w-[400px] mb-4' src={loadingIcon} alt="" />
      <p className='text-lg text-center font-semibold mb-2'>{projectStatus}<br></br> <span className='text-center text-sm text-gray-300'>{
        projectStatus == "Deployment process ended." ? "You can now leave this page." :
          "Do not leave or close this page"}</span></p>


      <p className='text-lg font-semibold my-5'>{projectUpdates}...</p>

      {deploymentUrl.includes("nikhilcloud") && <a className='btnx rounded-lg px-2 py-1' href={deploymentUrl} target='_blank'>Visit now</a>}
      {projectStatus == "Deployment process ended." && <a className='mt-4 btnx rounded-lg px-2 py-1' href="/app/websites" target='_parent'>Navigate to webistes</a>}
      {projectStatus != "Deployment process ended." && <LoadingShapes />}
    </div>
  )
}

export default GitProjectUpload
