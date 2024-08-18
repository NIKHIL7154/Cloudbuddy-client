import Cookies from 'js-cookie';


export async function isValidToken(){
    let token=  Cookies.get("userToken")
    console.log(token)
    if(token?.length>2){
        return true;
    }
    return false;
}

export function getTokenValue() {
    return Cookies.get("userToken")
}