import {
    ONLOADLOCATION,
    LOCATIONSUCCESS,
    LOCATIONFAILED
}
    from "./types"
import locationApi from "../../Services/fetchLocationApi"



export const onLoadLocation = () => (dispatch) =>{
    
   

    return locationApi.fetchLocation().then(res => {
        
        dispatch({
            type: LOCATIONSUCCESS,
            payload: { allLocation: res }
        })
            

    }).catch(error => {
        
       dispatch({
            type: LOCATIONFAILED,
            payload: { errorlocation: error }
        })

    })
}


