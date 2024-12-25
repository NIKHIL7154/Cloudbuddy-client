import Cookies from 'js-cookie';


export function isValidToken(){
    let token= Cookies.get("userToken")
    
    if(token && token.length>0){
        
        return true;
    }
    return false;
}

export function getTokenValue() {
    return Cookies.get("userToken")
}

export function removeToken(){
    Cookies.remove("userToken")
}