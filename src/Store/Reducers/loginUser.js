import * as actionTypes  from "../actions/types"


const zipCodRegex = RegExp(/^\d{4}$/);
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

    orderCredentials: {
        firstNameOrder : "" ,
        lastNameOrder: "",
        usernameOrder: "",
        adressOrder: "" ,
        stateOrder: "",
        cityOrder: "",
        zipCode: "",

        // paymentMethod: "",
        // nameOnCard: "",
        // CreditCardNumber: "",
        // expiration: "",
        // cvv:""
  
    },

    errors: {
            username:         { isValid: true, message: "", touched: false , formName: "credentials"},
            password:         { isValid: true, message: "", touched: false , formName: "credentials" },
            firstName:        { isValid: true, message: "", touched: false ,formName: "registerCredentials" },
            lastName:         { isValid: true, message: "", touched: false, formName: "registerCredentials" },
            usernameRegister: { isValid: true, message: "", touched: false , formName: "registerCredentials"},
            passwordRegister: { isValid: true, message: "", touched: false , formName: "registerCredentials" },
            confirmPassword:  { isValid: true, message: "", touched: false, formName: "registerCredentials" },
            firstNameOrder :  { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            lastNameOrder:    { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            usernameOrder: { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            adressOrder:    { isValid: true, message: "", touched: false, formName: "orderCredentials" },
            stateOrder:       { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            cityOrder:        { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            zipCode:          { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            // paymentMethod:    { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            // nameOnCard:       { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            // CreditCardNumber: { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            // expiration:       { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            // cvv:              { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
    },
    
    validForm: false,
    formType : "",
    user: {},
    logged: false ,
    token: "" ,
    registred: false,
    loding: false,
    allLocation: {},
    listeOfStates: [],
    listeOfCitys : [],

}
   
const reducer = (state=initialState , action ) =>{
    let tempToken;
    let tempLogged;
    let event;
    let errorsForm; 
    let user = {};
    let cridentialsType
    let response
    let tempState = []
    let tempAllLoc = {} 
     let  tempListeOfCitys = []
        
   switch (action.type) {

       case actionTypes.ONCHANGE:
         
           event = action.payload.event
           const value = event.currentTarget.value;
           const name = event.currentTarget.name;
           cridentialsType = action.payload.cridentialsType
           errorsForm = { ...state.errors };
            
      
           switch (name) {

               case "firstName":
               case "firstNameOrder":    
                   
                    errorsForm.firstName.touched = true
                    if (value.length < 3 || value.trim() === "") {
                        errorsForm[name].message = "First Name must be 3 characters long!";
                        errorsForm[name].isValid = false;
                        
                    } else {
                        errorsForm[name].message = "";
                        errorsForm[name].isValid = true;
                    
                    }
               
               break;
               case "lastName":
               case "lastNameOrder":        
                errorsForm.lastName.touched = true;
                    if (value.length < 3 || value.trim() === "") {
                        errorsForm[name].message = "LastName Must be 3 characters long!";
                        errorsForm[name].isValid = false;
                        
                        
                    } else {
                        errorsForm[name].message = "";
                        errorsForm[name].isValid = true;
                        
                    }

                    break;
               case "username":
               case "usernameRegister": 
               case "usernameOrder":     
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
               
               case "adressOrder":
                errorsForm.adressOrder.touched = true;
                if (value.trim() === "") {
                     errorsForm.adressOrder.message = "Please enter your shipping address. "
                     errorsForm.adressOrder.isValid = false;
                  
                    } else {
                    errorsForm.adressOrder.message = "";
                    errorsForm.adressOrder.isValid = true;
                }

                 break;   
              case 'stateOrder':
                   errorsForm.stateOrder.touched = true
               if (value === "choose state") {
                   errorsForm.stateOrder.message = " the state is required"
                   errorsForm.stateOrder.isValid = false
                       
               } else {
                   state.listeOfCitys = []
                   let allLoc = {...state.allLocation}
                   Object.entries(allLoc).forEach(loc => {
                  
                       if (loc[0] === value) {
                           loc[1].map(option =>  state.listeOfCitys.push(option.localite))
           
                       }
                   });
                   errorsForm.stateOrder.message = "";
                   errorsForm.stateOrder.isValid = true;
               }          
                   break; 
               
               case "cityOrder":
               errorsForm.cityOrder.touched = true;
               if (value === "choose city") {
                   errorsForm.cityOrder.message = "city is required";
                   errorsForm.cityOrder.isValid = false;
                   
               } else {
                    errorsForm.cityOrder.message = "";
                    errorsForm.cityOrder.isValid = true; 
               }
               
               
               break;
               
               case "zipCode":
               errorsForm.zipCode.touched = true;
               if (value.trim() === "" || !zipCodRegex.test(value)) {
                   errorsForm.zipCode.message = "Zip Code invalid";
                   errorsForm.zipCode.isValid = false;
                   
               } else {
                    errorsForm.zipCode.message = "";
                    errorsForm.zipCode.isValid = true; 
               }
                 break;    
               default:
                 
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
       
            
        case actionTypes.LOCATIONSUCCESS:
             tempAllLoc = action.payload.allLocation
             Object.entries(tempAllLoc).forEach(itemState => {
                           console.log(itemState)
                           tempState.push(itemState[0])
             });
            
            return {
                ...state,
                allLocation : tempAllLoc,
                listeOfStates : tempState

            }
        
        case actionTypes.LOCATIONFAILED:

            return {
                ...state,
                allLocation : {},
                gouvernorats : {}
              
            }
        
       default:
           break;
   }

 
    return state;



}

export default reducer;