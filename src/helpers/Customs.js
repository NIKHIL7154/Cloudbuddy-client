import axios from "axios";
import { HOST } from "./Variables";
import { useCookies } from "react-cookie";
async function makeRequest(endpoint,payload){
    const response = await axios.post(HOST+endpoint,payload)
}