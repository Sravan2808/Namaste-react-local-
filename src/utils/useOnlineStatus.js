import { useState , useEffect } from "react";
const useOnlineStatus = ()=>{

    // check if online
    const [OnlineStatus,setOnlineStatus] = useState(true);

    useEffect(()=>{

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })

    },[]);
    //boolean value
    return OnlineStatus;
}
export default useOnlineStatus;