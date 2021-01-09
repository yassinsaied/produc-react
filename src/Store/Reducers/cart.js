import * as actionTypes from "../actions/types";

const initialState = {
  listProducts: [],
  count: 0,
  amount: 0,
  refProduct: "",
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.INCDECREMENTQT:
      let count = 0;
      action.payload.operator === "plus" ? count= state.count + 1 : count= Math.max(0, (state.count -1)) 
        return {
            ...state,
            count: count,
            amount: (action.payload.price * count).toFixed(2),
            refProduct: action.payload.productRef,
  
       }
     case actionTypes.CANCEL:
      return {
        ...state,
        count: 0,
        amount: 0,
        refProduct: "",
      };

    case actionTypes.ADDTOCART:
      const findProduct = state.listProducts.find(product => {
        return product.refProduct === action.payload.refProduct
             })
      if (findProduct === undefined) {
      
        return Object.assign({}, state, {
            listProducts: state.listProducts.concat({
            refProduct: action.payload.refProduct,
            amountProduct: action.payload.amount,
            countProduct: action.payload.count,
            nameProduct: action.payload.nameProduct,
            typeProduct: action.payload.typeProduct,
            picProduct: action.payload.picProduct,
            priceProduct: action.payload.priceProduct,
            unitProduct : action.payload.unitProduct
            }),
             count: 0,
            amount: 0,
            refProduct: "",
        });
      }
      else { 
       return Object.assign({} , state , {
                      listProducts: state.listProducts.map(product => {
                        if(product.refProduct !== action.payload.refProduct ){
                            return product
                          }
                        return Object.assign({}, product, {
                          countProduct: product.countProduct + action.payload.count,
                          amountProduct : ( product.priceProduct * (product.countProduct +action.payload.count)).toFixed(2),
                                })
                      }),
                     count: 0,
                     amount: 0,
                     refProduct: "",
            })

      }

    case actionTypes.EDITQTPRODUCT: 
      
      return Object.assign({} , state , {
                listProducts: state.listProducts.map(product => {
                   if(product.refProduct !== action.payload.refProduct ){
                       return product
                  }
                  return Object.assign({}, product, {
                 
                     countProduct:   action.payload.operator === "plus" ? product.countProduct + 1 : Math.max(0, (product.countProduct - 1)) ,
                     amountProduct : ( product.priceProduct * (action.payload.operator === "plus" ? product.countProduct + 1 : Math.max(0, (product.countProduct - 1)))).toFixed(2),
                          })
                   })
      })
      
    case actionTypes.DELETEPRODUCT: 
      return Object.assign({}, state, {
                    listProducts: state.listProducts.filter(product => {
                    return  product.refProduct!== action.payload.refProduct
              })  
      })
    
    case actionTypes.INITIALISATIONCART:
      
      return initialState

    default:
  }

  

  return state;
};

export default reducer;
