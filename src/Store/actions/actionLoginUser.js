import {
    LOGINSUCCESS,
    LOGINFAILD,
    SETCURRENTUSER,
    ONCHANGE,
    ONSUBMIT,
    ONLOGIN
} from "./types"
import athApi from "../../Services/authApi"

export const login = (credentials) => (dispatch) => {
   dispatch({
                  type: ONLOGIN,
                  payload: { credentials: credentials }
      })

    return athApi.authenticate(credentials).then(
        res => {
           
        dispatch({
                type: LOGINSUCCESS,
                payload: { user: res },
            });
         return res.data.token
        }).then(token => {
               return athApi.getUserByUserName(token).then(
               res => {
                    dispatch({
                        type: SETCURRENTUSER,
                        payload: { user: res }

                    })
                       
                })  
            
        }).catch(error => {
          console.log(error)
               dispatch({
                    type: LOGINFAILD,
                    payload: { errorResponse: error },
           });
        })

}

export const onChange = (event) => (dispatch) => {
      dispatch({
        type: ONCHANGE,
        payload: { event: event }
    });

}

export const onSubmit = (event ,credentials) => (dispatch) => {
      dispatch({
        type: ONSUBMIT,
        payload: { event: event , credentials :credentials }
      })

}

