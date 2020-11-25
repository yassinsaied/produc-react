import * as actionTypes  from "../actions/types"
//import AuthApi from "../../Services/authApi"
const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const initialState = {
    credentials: {
            username: "",
            password : ""
        },
    errors: {
            username: { isValid: true, message: "", touched: false },
            password: { isValid: true, message: "", touched: false },
            },
    validForm: null ,
    user: null,
    logged: false ,
    token : "" 

}
   
const reducer = (state=initialState , action ) =>{
  let tempToken;
    let tempLogged;
    let event;
    let errorsForm; 
    let user = null;
        
   switch (action.type) {

       case actionTypes.ONCHANGE:
           event = action.payload.event
           const value = event.currentTarget.value;
           const name = event.currentTarget.name;
           errorsForm = { ...state.errors };
      
           switch (name) {
               case "username":
                   errorsForm.username.touched = true;
                   if (!validEmailRegex.test(value) || value.trim() === "") {
                       errorsForm.username.message = "email invalid"
                       errorsForm.username.isValid = false
                   } else {
                       errorsForm.username.message = ""
                       errorsForm.username.isValid = true
                   }
       
                   break;
               case "password":
                   errorsForm.password.touched = true;
                   if (value.length < 6 || value.trim() === "") {
                       errorsForm.password.message = "password must be 6 charcter long"
                       errorsForm.password.isValid = false
                   } else {
                       errorsForm.password.message = ""
                       errorsForm.password.isValid = true
                   }
                   break;
    
               default:
                   break;
           }
       
           return {
               ...state,
               credentials: { ...state.credentials, [name]: value },
               errors: errorsForm,
           }
       
       case actionTypes.ONSUBMIT:
         event = action.payload.event
         event.preventDefault();
         let     allFormValid;
         errorsForm = {...state.errors}
         Object.entries(errorsForm).forEach((error) => {
       
            if ((!error[1].isValid && error[1].touched )|| (error[1].isValid && !error[1].touched)) {
                allFormValid = false  
                errorsForm[error[0]].message = error[0] + " is Required ";
                errorsForm[error[0]].isValid = false;
            } else {
                
                allFormValid = true;  
            }
        });
           
           return {
               ...state,
               errors: errorsForm,
               validForm: allFormValid ,
          
           }
       
       case actionTypes.ONLOGIN:
           
           return {
               ...state,
               validForm : null
            

           }
 
       case actionTypes.LOGINSUCCESS:
          
           let response = action.payload.dataToken
            tempToken = response.data.token;
            tempLogged = true
                   
           return {
              ...state,
               token: tempToken,
               logged : tempLogged
           }

          
       case actionTypes.LOGINFAILD:
           errorsForm = { ...state.errors }
           tempToken = "invalid token";
           tempLogged = false;
           errorsForm.username.message = " invalid credentials";
           errorsForm.password.message = " invalid credentials";
   
           return {
               ...state,
               token: tempToken,
               logged: tempLogged,
               errors: {
                   ...errorsForm,
                   username: { message: errorsForm.username.message },
                   password: { message: errorsForm.password.message }
                   
               }
           }
       
       case actionTypes.SETCURRENTUSER:
           user = action.payload.user
           console.log(user)
           return {
               ...state,
               user : user
 
           }

       case actionTypes.VALIDATIONSESSION :
      
         tempLogged = action.payload.validSession
         console.log(tempLogged)
        if(!tempLogged){
            user = null ;
            tempToken = "";
        }else {
            
            tempToken = state.token
        }
        
           
       
       return {
         ...state,
        
         token : tempToken,
         logged :tempLogged
       }


       case actionTypes.LOGOUT :
          console.log("sdsdssd");
          user= null
           return{
             ...state,
             token :"",
             user : null,
             logged: false
            
           }
       
       default:
           break;
   }

    
    
       

    return state;



}

export default reducer;