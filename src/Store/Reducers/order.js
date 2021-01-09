import * as actionTypes  from "../actions/types"

const initialState = {
    
    order : {
    sentAt : null,
    addressDelivery : "",
    user: "",
    orderProducts : []
    },

    orderDone: false,
    loding: false,
    messageOrderResult  :""
    
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
          
            
            return Object.assign({}, state, {
              ...state ,
             order : {
                    sentAt: new Date(),
                    addressDelivery: allAddress,
                    user: uriUser,
                    orderProducts : listOrPr
                },
              loding :true
            })
                
           
        
        case actionTypes.ONSUCCESSORDER:
            
            return {
     
                ...state,
                orderDone: true,
                loding: false,
                messageOrderResult :"Your order has been received and accepted"
         
            }
        
        case actionTypes.ONFAIILEDORDER :
            
            return {
     
                ...state,
                orderDone: true,
                loding: false,
                messageOrderResult :"Your order has been failed please review and try again later"
           
            }
        
        case action.AFTERESPONSEORDER:
            
            return {
             ...state,
             orderDone: false,
             messageOrderResult :""

            }
     
    
        default:
           
    }


    return state
}
 
export default reducer;