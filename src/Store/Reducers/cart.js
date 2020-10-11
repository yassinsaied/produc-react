import * as actionTypes from "../ActionsAddToCart";

const initialState = {
  listProducts: [],
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDTOCART:
      //const newState =
      return Object.assign({}, state, {
        listProducts: state.listProducts.concat({
          refProduct: action.payload.refProduct,
          amountProduct: action.payload.amount,
          countProduct: action.payload.count,
          nameProduct: action.payload.nameProduct,
          typeProduct: action.payload.typeProduct,
          picProduct: action.payload.picProduct,
          priceProduct : action.payload.priceProduct
        }),
      });

    case actionTypes.EDITINCQTPRODUCT: 
      
      return Object.assign({} , state , {
                listProducts: state.listProducts.map(product => {
                   if(product.refProduct !== action.payload.refProduct ){
                       return product
                    }
                  return Object.assign({}, product, {
                     
                     countProduct: product.countProduct + 1,
                     amountProduct : ( product.priceProduct * (product.countProduct +1)).toFixed(2),
                          })
                   })
      })
    
    case actionTypes.EDITDECQTPRODUCT: 
      return Object.assign({} , state , {
                listProducts: state.listProducts.map(product => {
                   if(product.refProduct !== action.payload.refProduct ){
                       return product
                    }
                   return Object.assign({}, product, {
                     countProduct: product.countProduct - 1,
                      amountProduct : ( product.priceProduct * (product.countProduct +1)).toFixed(2),
                          })
                   })
      })
    
    
    case actionTypes.DELETEPRODUCT: 
      return Object.assign({}, state, {
                    listProducts: state.listProducts.filter(product => {
                    return  product.refProduct!== action.payload.refProduct
              })  
      })

    default:
  }

  return state;
};

export default reducer;
