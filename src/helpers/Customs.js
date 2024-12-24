import axios from "axios";
import { HOST } from "./Variables";
import { getTokenValue, isValidToken, removeToken } from "./SecureCheck";

export async function createPostRequest(endpoint, payload) {
    return new Promise((res, rej) => {
        (async () => {
            if (!isValidToken()) {
                console.log("createPostRequest Promise failed no valid token found")
                rej({ code: 401, message: "No valid token found" })
                return
            }
            try {
                const token = getTokenValue()
                console.log("toen " + token)
                const response = await axios.post(HOST + endpoint, payload, { headers: { Authorization: "Bearer " + token } })
                res({ code: response.status, data: response.data })
                //res({ code: 200, data: {Urls:["https://www.google.com","https://www.facebook.com"]} })
            } catch (error) {
                if (error.response && error.response.status == 401) {
                    removeToken()
                    rej({ code: 401, message: "Your token is expired" })
                } else {
                    rej({ code: 500, message: "Some error has been occured on our side" })
                }
                console.log("createPostRequest Promise failed " + error)
            }
        })()

    })


}



export async function createGetRequest(endpoint) {
    return new Promise((res, rej) => {
        (async () => {
            if (!isValidToken()) {
                console.log("createGetRequest Promise failed no valid token found")
                rej({ code: 401, message: "No valid token found" })
                return
            }
            try {
                const token = getTokenValue()
                console.log("token " + token)
                const response = await axios.get(HOST + endpoint, { headers: { Authorization: "Bearer " + token } })
                res({ code: response.status, data: response.data })
                //res({ code: 200, data: {Urls:["https://www.google.com","https://www.facebook.com"]} })
            } catch (error) {
                if (error.response && error.response.status == 401) {
                    removeToken()
                    rej({ code: 401, message: "Your token is expired" })
                } else {
                    rej({ code: 500, message: "Some error has been occured on our side" })
                }
                console.log("createGetRequest Promise failed " + error)
            }
        })()

    })


}

export async function uploadFilesRequest(URLS, file) {
    return new Promise((res, rej) => {
        (async () => {

            try {
                for (let i = 0; i < URLS.length; i++) {

                    const rep = await axios.put(URLS[i], file[i], {
                        headers: {
                            'Content-Type': file[i].type
                        }
                    })
                    if (rep.status != 200) {
                        rej({ code: 500, message: "Uploading of your website has been failed please try again. upload fail" })


                    }
                }
                res({ code: 200, message: "Upload success" })
            } catch (error) {
                rej({ code: 500, message: "Uploading of your website has been failed please try again. upload fail" })
            }
        })()
    })
}