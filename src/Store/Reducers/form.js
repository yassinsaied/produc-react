import * as actionTypes  from "../actions/types"


const zipCodRegex = RegExp(/^\d{4}$/);
const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const acceptedCreditCards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
    diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/,
  };

const validateCard =(valueInput) =>{
  // remove all non digit characters
  const value = valueInput.replace(/\D/g, '');
  let sum = 0;
  let shouldDouble = false;
  // loop through values starting at the rightmost side
  for (var i = value.length - 1; i >= 0; i--) {
    let digit = parseInt(value.charAt(i));

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }
  
  let valid = (sum % 10) === 0;
  let accepted = false;
  
  // loop through the keys (visa, mastercard, amex, etc.)
  Object.keys(acceptedCreditCards).forEach(function(key) {
    var regex = acceptedCreditCards[key];
    if (regex.test(value)) {
      accepted = true;
    }
  });
  
  return valid && accepted;
}

const validateCVV = (cCard, cVv)=> {
  // remove all non digit characters
  const  creditCard = cCard.replace(/\D/g, '');
  const  cvv = cVv.replace(/\D/g, '');
  // american express and cvv is 4 digits
  if ((acceptedCreditCards.amex).test(creditCard)) {
    if((/^\d{4}$/).test(cvv))
      return true;
  } else if ((/^\d{3}$/).test(cvv)) { // other card & cvv is 3 digits
    return true;
  }
  return false;
}

const iniitialState = {
     credentials: {
            username: "",
            password : ""
    },
    
    registerCredentials :{
        firstName : "" ,
        lastName : "",
        usernameRegister: "",
        passwordRegister : "credit"
    }   , 

    orderCredentials: {
        firstNameOrder : "" ,
        lastNameOrder: "",
        usernameOrder: "",
        adressOrder: "" ,
        stateOrder: "",
        cityOrder: "",
        zipCode: "",
        paymentMethodOrder: "",
        creditCardNumber: "",
        cvv:""
  
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
            paymentMethodOrder:    { isValid: true, message: "", touched: false, formName: "orderCredentials" }, 
            creditCardNumber: { isValid: true, message: "", touched: false, formName: "orderCredentials" },
            cvv: { isValid: true, message: "", touched: false, formName: "orderCredentials" },
           
            
            
          
    },
    
    validForm: false,
    formType : "",
    allLocation: {},
    listeOfStates: [],
    listeOfCitys: [],
    errorMessageOrder : ""
  


}


const reducer = (state = iniitialState, action) => {
    
   
    let event;
    let errorsForm; 
    let cridentialsType
    let tempState = []
    let tempAllLoc = {} 
    
    
   switch (action.type) {

       case actionTypes.ONCHANGE:
         
           event = action.payload.event
           const value = event.currentTarget.value;
           const name = event.currentTarget.name;
           const checked = event.currentTarget.checked;
           cridentialsType = action.payload.cridentialsType
           errorsForm = { ...state.errors };
            
      
           switch (name) {

               case "firstName":
               case "firstNameOrder":    
                   
                    errorsForm[name].touched = true
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
                errorsForm[name].touched = true;
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
                 
             case "paymentMethodOrder":
                   errorsForm.paymentMethodOrder.touched = true;
                 
               if (!checked) {
                   errorsForm.paymentMethodOrder.message = "Payment Method IS Required";
                   errorsForm.paymentMethodOrder.isValid = false;
                   
               } else {
                    errorsForm.paymentMethodOrder.message = "";
                    errorsForm.paymentMethodOrder.isValid = true; 
               }
                   break;  
               
               
               
             case "creditCardNumber":
                   errorsForm.creditCardNumber.touched = true;
                
               if (!validateCard(value)) {
                   errorsForm.creditCardNumber.message = "Card Number Invalid";
                   errorsForm.creditCardNumber.isValid = false;
                   
               } else {
                    errorsForm.creditCardNumber.message = "";
                    errorsForm.creditCardNumber.isValid = true; 
               }
                   break;  
               
            case "cvv":
                errorsForm.cvv.touched = true;
                let currentCardNuber = state.orderCredentials.creditCardNumber
               
               if (!validateCVV(currentCardNuber , value) || !validateCard(currentCardNuber)) {
                   errorsForm.cvv.message = "cvv Invalid";
                   errorsForm.cvv.isValid = false;
                   
               } else {
                    errorsForm.cvv.message = "";
                    errorsForm.cvv.isValid = true; 
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
                            errorsForm[error[0]].message = "This Field is Required";
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
       
       case actionTypes.ONERRORESPONSE :
           errorsForm = { ...state.errors } ;
           let  errorOrder ;
          
         if(action.payload.formType === "login"){  
                errorsForm.username.message = " invalid credentials";
                errorsForm.username.isValid = false
                errorsForm.password.message = " invalid credentials";
                errorsForm.password.isValid = false
             
             }else if (action.payload.formType === "register") {
          
               errorsForm.usernameRegister.message = "This email adrealy existe"
               errorsForm.usernameRegister.isValid = false
     
           }
         else {
             
         
         errorOrder = "Its Impossible to pass This Order"
             
           }
           
           return {
             ...state,
             errors : errorsForm,
             errorMessageOrder: errorOrder,
             validForm:false
             
               
           }

           case actionTypes.LOCATIONSUCCESS:
            tempAllLoc = action.payload.allLocation
            Object.entries(tempAllLoc).forEach(itemState => {
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