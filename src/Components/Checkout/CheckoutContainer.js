import React from "react"
import { connect } from "react-redux";
import CheckoutCart from "./CheckoutCart/CheckoutCart"
import FormCheckout from "./FormCheckout/FormCheckout"


const checkout = (props) => {
    
    return <>
      
    
   <div className="row">
      <CheckoutCart listProducts={props.listProducts}/>
      <FormCheckout/>
           
  </div> 

    </>

}
const mapStateToProps = (state) => {
  return { listProducts: state.cartR.listProducts };
};

export default connect(mapStateToProps)(checkout);

