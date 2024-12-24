function formInputData(formData,setformData,handleWebsiteName){
    const formInput = {
        websiteName: <input type="text" className="border p-2" placeholder="Enter website name" value={formData.name} onChange={handleWebsiteName} enterKeyHint="hello" title="Enter the website name that is minimum 5 characters" />,

        projectType: <select className="border p-2" value={formData.projectType} onChange={(e) => setformData({ ...formData, projectType: e.target.value,uploadMethod:"",gitUrl:"",files:"" })}>
            <option value="">Select project type</option>
            <option value="plain">Plain Html, Js, Css project</option>
            <option value="react">React</option>
            <option value="vite">Vite</option>
        </select>,

        uploadMethod: <select className="border p-2" value={formData.uploadMethod} onChange={(e) => setformData({ ...formData, uploadMethod: e.target.value,gitUrl:"",files:"" })}>
            <option value="">Select upload method</option>
            <option value="manual">Manual upload</option>
            <option value="git">Git repository</option>
        </select>,

        gitUrl: <input type="text" className="border p-2" placeholder="Enter git URL" value={formData.gitUrl} onChange={(e) => setformData({ ...formData, gitUrl: e.target.value,files:"" })} />,

        fileInput: <input type="file" onChange={(e) => setformData({ ...formData, files: e.target.files,gitUrl:"" })} className="border p-2" placeholder="Select folder" multiple webkitdirectory="true" />
    }
    const formInputs = {
        websiteName: (
            <input
                type="text"
                className="w-[40%] border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter website name"
                value={formData.name}
                onChange={handleWebsiteName}
                enterKeyHint="hello"
                title="Enter the website name that is minimum 5 characters"
            />
        ),
    
        projectType: (
            <select
                className="w-[40%] border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                value={formData.projectType}
                onChange={(e) =>
                    setformData({
                        ...formData,
                        projectType: e.target.value,
                        gitUrl: "",
                        files: "",
                    })
                }
            >
                <option value="" disabled>
                    Select project type
                </option>
                <option value="html">Plain Html, Js, Css project</option>
                <option value="react">React or Vite</option>
                
            </select>
        ),
    
        
    
        gitUrl: (
            <input
                type="text"
                className="w-[40%] border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter git URL"
                value={formData.gitUrl}
                onChange={(e) =>
                    setformData({
                        ...formData,
                        gitUrl: e.target.value,
                        files: "",
                    })
                }
            />
        ),
    
        fileInput: (
            <input
                type="file"
                className="w-[40%] border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                onChange={(e) =>
                    setformData({
                        ...formData,
                        files: e.target.files,
                        gitUrl: "",
                    })
                }
                placeholder="Select folder"
                multiple
                webkitdirectory="true"
            />
        ),
    };
    return formInputs
    
}
export default formInputData