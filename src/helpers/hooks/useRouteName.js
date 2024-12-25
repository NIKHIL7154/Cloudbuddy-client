import React, { useEffect, useState } from 'react'

var route = window.location.pathname.split('/').slice(2).join('/') || '';
const useRouteName = () => {
    const [curRoute, setcurRoute] = useState("");
    
    useEffect(() => {
        let broute=window.location.pathname.split('/').slice(2).join('/') || '';
        setcurRoute(broute)
        const intervalRoute=setInterval(() => {
            let curroute=window.location.pathname.split('/').slice(2).join('/') || '';
            if(curroute!=route){
              
                route=curroute;
                setcurRoute(curroute)
            }
            
        }, 500);
        return () => {
            clearInterval(intervalRoute)
        };
    }, []);
  return curRoute
}

export default useRouteName
