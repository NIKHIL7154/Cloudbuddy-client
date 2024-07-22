const handleUpload= async()=>{
    let file=files.current.files
    if(file.length<1){
      alert("Please select a file")
    }else{
      console.log(file)
      let payload=[]
      for(let i=0; i<file.length;i++){
        payload.push({name:file[i].name,type:file[i].type})
      }
      console.log(payload)
      const resp = await axios.post(HOST+'/multiupload',{data:payload})
      console.log(resp)
      const URLS = resp.data
      for(let i=0;i<URLS.length;i++){

        const rep=await axios.put(URLS[i],file[i],{headers: {
          'Content-Type': file[i].type
        }})
        console.log(URLS[i]+" and file is -> ")
        console.log(file[i])
        console.log(rep)
      }}}