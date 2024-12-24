export default async function verifyFiles(files){
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
      return false
    }
    return true
}