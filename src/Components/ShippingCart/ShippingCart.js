import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/ActionsAddToCart"

import "./ShippingCart.css";

class shippingCart extends Component {







  render() {
    const totalArray = [];
    const listProducts = this.props.listProducts.map(product => {
     totalArray.push(parseFloat(product.amountProduct))
     return (
<>
 <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-2 text-center">
                <img
                  className="img-responsive"
                  src={process.env.PUBLIC_URL+"/assets/img/"+ product.typeProduct + "/"+ product.picProduct}
                  alt={product.nameProduct}
                  width="120"
                  height="80"
                />
              </div>
              <div className=" col-12 text-center  text-sm-center col-sm-12 text-md-left col-md-8 text-lg-left col-lg-6">
                <h4 className="product-name">
                  <strong>{product.nameProduct}</strong>
                </h4>
                
              </div>
              <div className="col-12 col-sm-12 text-sm-center col-md-12 col-lg-4 text-md-right row pt-3">
                <div className="col-4 col-sm-3 col-md-3 pt-2">
                  <h6 className="text-center"> {product.amountProduct} </h6>
                </div>
                <div className=" col-4 col-sm-6 col-md-6 text-md-center">
                  <div className="quantity">
                    <div className="btn-group " role="group">
                      <button type="button" className="btn btn-info" onClick={()=>this.props.editDecQt(product.refProduct)}>
                        -
                      </button>
                      <span className="btn btn-light">{product.countProduct}</span>
                      <button type="button" className="btn btn-info" onClick={()=>this.props.editIncQt(product.refProduct)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-sm-3 col-md-3 text-right">
                  <button
                    type="button"
                 className="btn btn-outline-danger btn-xs"
                 onClick={()=>this.props.deleteProduct(product.refProduct)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <hr />

        </>
       )

    })
    const total = totalArray.reduce((acc, curr) => { return acc + curr; } , 0  )

    return (
      <>
        <div className="card shopping-cart">
          <div className="card-header bg-info text-light">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            Shipping cart
            <span href="" className="btn btn-outline-info btn-sm pull-right">
              Continiu shopping
            </span>
            <div className="clearfix"></div>
          </div>
          <div className="card-body">
           {listProducts}
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-12 text-right">
                <span className="mr-2">
                  Total price: <b>{(total).toFixed(2)}</b>
                </span>
                <span className="btn btn-success">Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { listProducts: state.cart.listProducts };
};

const mapActionToState = (dispatch) => {
  
  return {
    
    editIncQt: (ref) => dispatch({ type: actionTypes.EDITDECQTPRODUCT, payload: { refProduct: ref } }),
    editDecQt: (ref) => dispatch({ type: actionTypes.EDITDECQTPRODUCT, payload: { refProduct: ref } }),
    deleteProduct : (ref) => dispatch({type : actionTypes.DELETEPRODUCT , payload : {refProduct : ref}})

  }

}

export default connect(mapStateToProps, mapActionToState)(shippingCart);
