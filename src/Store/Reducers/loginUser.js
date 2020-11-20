import * as actionTypes  from "../actions/types"
//import AuthApi from "../../Services/authApi"

const initialState = {
   
    user :{},
    logged: false ,
    token : "" 

}
   
const reducer = (state=initialState , action ) =>{
 
        
   switch (action.type) {
     
       
    
       
       case actionTypes.LOGINSUCCESS:
           let tempToken;
           let tempLogged;
           let response = action.payload.user
               if (response.status === 200) {
                   console.log(response)
                       tempToken = response.data.token;
                       tempLogged = true
                       
                } else {
                       tempToken = null;
                       tempLogged = false;
                       
                   } 
           
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