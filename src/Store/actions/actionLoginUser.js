import {
    LOGINSUCCESS,
    LOGINFAILD,
    SETCURRENTUSER,
    ONCHANGE,
    ONSUBMIT,
    ONLOGIN,
    VALIDATIONSESSION,
    LOGOUT
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
                payload: { dataToken: res },
            });
         return res.data.token
        }).then(token => {
               return athApi.getUserByUserName(token).then(
               userData => {

                   let user = userData.data['hydra:member'][0]
                    dispatch({
                        type: SETCURRENTUSER,
                        payload: { user: user }

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

export const validationSession = () => (dispatch) => {
  let validSession  = athApi.setup()
 
  dispatch({
    type: VALIDATIONSESSION,
    payload : {validSession : validSession}
    
  })


}


export const logout = () => (dispatch) => {
   athApi.logout()
   dispatch({
    type: LOGOUT
   
  })
 



}

