import {
    LOGINSUCCESS,
    LOGINFAILD
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
               dispatch({
                    type: LOGINFAILD,
                    payload: { errorResponse: error },
           });
        })

}