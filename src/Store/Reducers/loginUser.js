import * as actionTypes  from "../actions/types"
//import AuthApi from "../../Services/authApi"
const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const initialState = {
    credentials: {
            username: "",
            password : ""
    },
    
    registerCredentials :{
        firstName : "" ,
        lastName : "",
        usernameRegister: "",
        passwordRegister : ""
    }   , 
    errors: {
            username: { isValid: true, message: "", touched: false , formName: "credentials"},
            password: { isValid: true, message: "", touched: false , formName: "credentials" },
            firstName: { isValid: true, message: "", touched: false ,formName: "registerCredentials" },
            lastName: { isValid: true, message: "", touched: false, formName: "registerCredentials" },
            usernameRegister: { isValid: true, message: "", touched: false , formName: "registerCredentials"},
            passwordRegister: { isValid: true, message: "", touched: false , formName: "registerCredentials" },
            confirmPassword: { isValid: true, message: "", touched: false , formName: "registerCredentials" },
            },
    validForm: false,
    formType : "",
    user: {},
    logged: false ,
    token: "" ,
    registred: false,
    loding : false

}
   
const reducer = (state=initialState , action ) =>{
    let tempToken;
    let tempLogged;
    let event;
    let errorsForm; 
    let user = {};
    let cridentialsType
    let response
        
   switch (action.type) {

       case actionTypes.ONCHANGE:
         
           event = action.payload.event
           const value = event.currentTarget.value;
           const name = event.currentTarget.name;
           cridentialsType = action.payload.cridentialsType
           errorsForm = { ...state.errors };
            
      
           switch (name) {

               case "firstName":
                    errorsForm.firstName.touched = true
                    if (value.length < 3 || value.trim() === "") {
                        errorsForm.firstName.message = "First Name must be 3 characters long!";
                        errorsForm.firstName.isValid = false;
                        
                    } else {
                        errorsForm.firstName.message = "";
                        errorsForm.firstName.isValid = true;
                    
                    }
               
               break;
              case "lastName":
                errorsForm.lastName.touched = true;
                    if (value.length < 3 || value.trim() === "") {
                        errorsForm.lastName.message = "LastName Must be 3 characters long!";
                        errorsForm.lastName.isValid = false;
                        
                        
                    } else {
                        errorsForm.lastName.message = "";
                        errorsForm.lastName.isValid = true;
                        
                    }

                    break;
               case "username":
               case "usernameRegister":    
                   errorsForm[name].touched = true;
                   if (!validEmailRegex.test(value) || value.trim() === "") {
                       errorsForm[name].message = "email invalid"
                       errorsForm[name].isValid = false
                   } else {
                       errorsForm[name].message = ""
                       errorsForm[name].isValid = true
                   }
       
                   break;
                             
               case "password":
               case "passwordRegister":    
                   errorsForm[name].touched = true;
                   if (value.length < 6 || value.trim() === "") {
                       errorsForm[name].message = "password must be 6 charcter long"
                       errorsForm[name].isValid = false
                   } else {
                       errorsForm[name].message = ""
                       errorsForm[name].isValid = true
                   }
                   break;
               
               case "confirmPassword":
                   errorsForm.confirmPassword.touched = true;
                   if (value !== state.registerCredentials.passwordRegister) {
                       errorsForm.confirmPassword.message = "Passwords don't match"
                       errorsForm.confirmPassword.isValid = false
                   } else {
                       errorsForm.confirmPassword.message = ""
                       errorsForm.confirmPassword.isValid = true
                   }
                   break;

                   
               default:
                   break;
           }
       
           return {
               ...state,
               [cridentialsType]: { ...state[cridentialsType] , [name]: value },
               errors: errorsForm,
           }
       
        case actionTypes.ONSUBMIT:
            let allFormValid;
            event = action.payload.event
            cridentialsType = action.payload.cridentialsType
            errorsForm = { ...state.errors }
            event.preventDefault();
            console.log(cridentialsType)
            Object.entries(errorsForm).forEach((error) => {
                    if (error[1].formName === cridentialsType) {
                        
                        if ((!error[1].isValid && error[1].touched) || (error[1].isValid && !error[1].touched)) {
                            
                            allFormValid = false
                            errorsForm[error[0]].message = error[0] + " is Required ";
                            errorsForm[error[0]].isValid = false;
                        
                        } else {

                            allFormValid = true;
                        
                        }
                    }
                    
        });
                        
            return {
                ...state,
                errors: errorsForm,
                validForm: allFormValid,
                formType : cridentialsType
            }
        
        case actionTypes.ONLOGIN:
                
            return {
                ...state,
                validForm: true,
                formType: "",
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

            errorsForm = { ...state.errors }
            tempToken = "invalid token";
            tempLogged = false;
           errorsForm.username.message = " invalid credentials";
           errorsForm.username.isValid = false
           errorsForm.password.message = " invalid credentials";
           errorsForm.password.isValid = false
            
            return {
                ...state,
                token: tempToken,
                logged: tempLogged,
                errors:errorsForm ,
                validForm: false, 
                loding:false
            }
        
        case actionTypes.SETCURRENTUSER:

            user = action.payload.user
            
            return {
                ...state,
                user: user,
                logged: true ,
                credentials: {
                    username: "",
                    password :""
                }
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
                validForm: true,
                formType: "",
                loding:true
            }
        
        case actionTypes.REGISTERSUCCESS:
           response = action.payload.successRegister
           console.log(response)
            return{
                ...state,
                loding: false,
                registred :true
                
            }
       
         case actionTypes.REGISTERFAILD:
           response = action.payload.errorRegister
           errorsForm = { ...state.errors } 
           errorsForm.usernameRegister.message = "This email adrealy existe"
              errorsForm.usernameRegister.isValid = false
           console.log(response ,  errorsForm)
            return{
                ...state,
                errors : errorsForm,
                loding: false,
                registred:false
                
            }
        
       default:
           break;
   }

 
    return state;



}

export default reducer;