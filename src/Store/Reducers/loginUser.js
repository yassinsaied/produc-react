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




const initialState = {
   
    
    validForm: false,
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
    let user = {};
    let response
  
    
        
   switch (action.type) {

      
        
        case actionTypes.ONLOGIN:
                
            return {
                ...state,
                //loding:true
                //validForm: false,
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