import * as actionTypes  from "../actions/types"
//import AuthApi from "../../Services/authApi"

const initialState = {
   
    user :{},
    logged: false ,
    token : "" 

}
   
const reducer = (state=initialState , action ) =>{
  let tempToken;
  let tempLogged;
        
   switch (action.type) {

       case actionTypes.LOGINSUCCESS:
          
           let response = action.payload.user
         
            tempToken = response.data.token;
            tempLogged = true
                   
           return {
              ...state,
               token: tempToken,
               logged : tempLogged
           }

          
       case actionTypes.LOGINFAILD:
           tempToken = null;
            tempLogged = false;
   
           return {
               
               ...state,
               token: tempToken,
               logged : tempLogged
           }
       
       default:
           break;
   }

    
    
       

    return state;



}

export default reducer;