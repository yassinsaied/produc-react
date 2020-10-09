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
          //   productRef: action.payload.productRef,
          //   amount: action.payload.amount,
          //   count: action.payload.amount,
          productRef: action.payload.refProduct,
          amount: action.payload.amount,
          count: action.payload.count,
          nameProduct: action.payload.nameProduct,
          typeProduct: action.payload.typeProduct,
          picProduct: action.payload.picProduct,
        }),
      });

    default:
  }

  return state;
};

export default reducer;
