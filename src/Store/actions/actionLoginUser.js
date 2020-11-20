import {
   LOGINSUCCESS
} from "./types"
import athApi from "../../Services/authApi"

export const login = (credentials) => (dispatch) =>{
    return athApi.authenticate(credentials).then(
        res => {
            dispatch({
                    type: LOGINSUCCESS,
                    payload: { user: res },
           }); 
        }).catch(error => {
            console.log(error)
        })

}