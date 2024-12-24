export function createPayload(files) {
    let file = files
    let payload = []

    for (let i = 0; i < file.length; i++) {
        let path = file[i].webkitRelativePath
        path = path.substring(path.indexOf("/") + 1)
        payload.push({ name: file[i].name, type: file[i].type, dir: path })
    }
    return payload
}