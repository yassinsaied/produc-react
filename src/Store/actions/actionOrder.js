import {
  
    LOCATIONSUCCESS,
    LOCATIONFAILED,
    ONADDORDER,
    ONSUCCESSORDER,
    ONFAIILEDORDER,
    AFTERESPONSEORDER,
    INITIALISATIONCART
}
    from "./types"
import locationApi from "../../Services/fetchLocationApi"
import orderApi from "../../Services/orderApi"



export const onLoadLocation = () => (dispatch) =>{
    
   

    return locationApi.fetchLocation().then(res => {
        
        dispatch({
            type: LOCATIONSUCCESS,
            payload: { allLocation: res }
        })
            

    }).catch(error => {
        
       dispatch({
            type: LOCATIONFAILED,
            payload: { errorlocation: error }
        })

    })
}


export const onAddOrder = (state , city , address , user , listProducts) => (dispatch , getState) => {

    dispatch({
        type: ONADDORDER, 
        payload : { state:state , city: city, address:address , user :user, listProducts:listProducts}

    })
      const orderToPost = getState().orderR.order;
      //console.log(orderToPost)
    return orderApi.postOrder(orderToPost).then(res => {
        
        dispatch({
            type: ONSUCCESSORDER,
            payload : {successOrder : res} 
        })

        dispatch({
            type: INITIALISATIONCART,
           
        })

    
        


    }).catch(err => {
        dispatch({
            type: ONFAIILEDORDER,
            payload :{errorOrder: err}
        })

   

    })
    
    

}

export const afterResponseOrfer = () => (dispatch) => {
    
  dispatch({
              
          type:AFTERESPONSEORDER,
                
          }) 


}


