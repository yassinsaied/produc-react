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

        // const newState = Object.assign({}, state);
        // newState.count = state.count + 1;
        // newState.amount = (action.payload.price * state.count + 1).toFixed(2);
        // newState.refProduct = action.payload.productRef;
        // console.log(newState);
        // console.log(action.payload.price);
        count: state.count + 1,
        amount: (action.payload.price * count).toFixed(2),
        refProduct: action.payload.productRef,
      };

    case actionTypes.DECREMENTQT:
      count = state.count - 1;

      return {
        ...state,
        count: state.count + 1,
        amount: (action.payload.price * count).toFixed(2),
        refProduct: action.payload.productRef,
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
