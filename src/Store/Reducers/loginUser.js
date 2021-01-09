import * as actionTypes  from "../actions/types"







const initialState = {
   
       
    user: {},
    logged: false ,
    token: "" ,
    registred: false,
    loding: false,
 

}
   
const reducer = (state=initialState , action ) =>{
    let tempToken;
    let tempLogged;
    let user = {};
    let response
  
    
        
   switch (action.type) {

      
        
        case actionTypes.ONLOGIN:
                
            return {
                ...state,
                loding:true
               
            }
    
        case actionTypes.LOGINSUCCESS:

            response = action.payload.dataToken
            tempToken = response.data.token;

            return {
                ...state,
                token: tempToken,
                logged: true,
                loding:false
            }

        case actionTypes.LOGINFAILD:

          
           tempToken = "invalid token";
           tempLogged = false;
      
            
            return {
                ...state,
                token: tempToken,
                logged: tempLogged,
                loding:false
            }
        
        case actionTypes.SETCURRENTUSER:

            user = action.payload.user
            
            return {
                ...state,
                user: user,
                logged: true ,
               
                }

   

        case actionTypes.LOGOUT :
    
            return{
                ...state,
                token :"",
                user : {},
                logged: false
                
            }
            case actionTypes.ONREGISTER :
             
            return{
                ...state,
               loding:true
            }
        
        case actionTypes.REGISTERSUCCESS:
           response = action.payload.successRegister
            return{
                ...state,
                loding: false,
                registred :true
                
            }
       
         case actionTypes.REGISTERFAILD:
           response = action.payload.errorRegister
        
            return{
                ...state,
                loding: false,
                registred:false
                
            }
       
            
       
        
       default:
           break;
   }

 
    return state;



}

export default reducer;