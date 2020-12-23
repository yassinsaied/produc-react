import {
    LOGINSUCCESS,
    LOGINFAILD,
    SETCURRENTUSER,
    ONCHANGE,
    ONSUBMIT,
    ONLOGIN,
     LOGOUT,
    ONREGISTER,
    REGISTERSUCCESS,
    REGISTERFAILD
} from "./types"
import athApi from "../../Services/authApi"
import registerApi from "../../Services/registerApi"

export const login = (credentials, validForm) => (dispatch) => {
    
    if (validForm) {
      
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

}

export const register = (registerCredentials) => (dispatch) => {
    
    dispatch({
        type: ONREGISTER,
       

    })
    return registerApi.registerUser(registerCredentials).then(res=>{

        dispatch({
            type: REGISTERSUCCESS,
            payload : {successRegister : res}

       })

    }).catch(error => {

        dispatch({
           
            type: REGISTERFAILD,
            payload : {errorRegister : error}
       })

    })


}

export const onChange = (event , cridentialsType) => (dispatch) => {
      dispatch({
        type: ONCHANGE,
        payload: { event: event , cridentialsType: cridentialsType }
    });

}

export const onSubmit = (event , cridentialsType ) => (dispatch) => {
      dispatch({
        type: ONSUBMIT,
        payload: { event: event , cridentialsType: cridentialsType }
      })

   

}



export const logout = () => (dispatch) => {
   athApi.logout()
   dispatch({
    type: LOGOUT
   
  })
 



}

