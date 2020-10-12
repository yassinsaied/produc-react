import * as actionTypes from "../ActionsAddToCart";

const initialState = {
  count: 0,
  amount: 0,
  refProduct: "",
 
};

const reducer = (state = initialState, action) => {
  let count = 0;
  switch (action.type) {
    case actionTypes.INCREMENTQT:
      count = state.count + 1;
      return {
        ...state,
        count: state.count + 1,
        amount: (action.payload.price * count).toFixed(2),
        refProduct: action.payload.productRef,
      };

    case actionTypes.DECREMENTQT:
      state.count > 0 ?  count = state.count - 1 : count = 0

     

      return {
        ...state,
        count: count,
        amount: (action.payload.price * count).toFixed(2),
        refProduct: action.payload.productRef,
      };

    case actionTypes.ADDTOCART:
      return {
        ...state,
        count: 0,
        amount: 0,
        refProduct: "",
      };
    
     case actionTypes.CANCEL:
      return {
        ...state,
        count: 0,
        amount: 0,
        refProduct: "",
      };
    
    default:
  }
  return state;
};

export default reducer;
