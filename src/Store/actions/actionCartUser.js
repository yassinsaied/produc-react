import {
    INCDECREMENTQT,
    ADDTOCART,
    EDITQTPRODUCT,
    DELETEPRODUCT,
    CANCEL 
} from "./types"


export const editQt = (ref , operator) => (dispatch) =>{
  
    dispatch({
        type: EDITQTPRODUCT,
        payload: {
            refProduct: ref,
            operator: operator
        }
    });

}

export const deleteProduct = (ref) => (dispatch) => {
    
    dispatch({
        type: DELETEPRODUCT,
        payload: { refProduct: ref }
    });

}


export const incdecQte = (ref, newPrice , operator) => (dispatch) => {
    
    dispatch({
        type: INCDECREMENTQT,
        payload :{ productRef: ref, price: newPrice , operator } 

    })

}

export const cancel = () => (dispatch) => {
    
    dispatch({
       type: CANCEL
   })

}

export const addToCart = (ref, amount, count, name, type, pic , price, unit) => (dispatch) => {
    
    dispatch({
        type: ADDTOCART,
        payload: {
          refProduct: ref,
          amount: amount,
          count: count,
          nameProduct: name,
          typeProduct: type,
          picProduct: pic,
          priceProduct: price,
          unitProduct : unit
        }
    })
}