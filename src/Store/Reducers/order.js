import * as actionTypes  from "../actions/types"

const initialState = {
    
    order : {
    sentAt : null,
    addressDelivery : "",
    user: "",
    orderProducts : []
    },

    messageResult : ""
    
}

const reducer = (state= initialState , action) => {
     
    switch (action.type) {
        case actionTypes.ONADDORDER:

            
            let listOrPr = []
            let allAddress = action.payload.state + " ," + action.payload.city + " ," + action.payload.address;
            let uriUser = "/api/users/" + action.payload.user
            action.payload.listProducts.map(product => {
                let newFromProduct = {}
                newFromProduct.product = "/api/products/" + product.refProduct; 
                newFromProduct.Qte = product.countProduct;
                newFromProduct.amountProduct = parseFloat(product.amountProduct);
                listOrPr.push(newFromProduct);
              
            })
            state.loginR.validForm = false
            
            return Object.assign({}, state, {
              ...state ,
             order : {
                    sentAt: new Date(),
                    addressDelivery: allAddress,
                    user: uriUser,
                    orderProducts : listOrPr
                },
                    })
        
        case actionTypes.ONSUCCESSORDER:
            
            return {
     
                ...state,
                messageResult : action.payload.successOrder
         
            }
        
        case actionTypes.ONFAIILEDORDER :
            
            return {
     
                ...state,
                messageResult : action.payload.errorOrder
         
            }
     
    
        default:
           
    }


    return state
}
 
export default reducer;