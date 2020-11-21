import React, { Component } from "react";
import { connect } from "react-redux";
import {editQt ,deleteProduct } from "../../Store/actions/actionCartUser"

import "./ShippingCart.css";

class shippingCart extends Component {


  componentDidMount() {
    
    console.log(this.props.token)
  }

  render() {
    const totalArray = [];
    const listProducts = this.props.listProducts.map(product => {
     totalArray.push(parseFloat(product.amountProduct))
     return (
          <>
          <div className="row" key={product.id}>
                        <div className="col-sm-12 col-md-4 col-lg-2 text-center">
                          <img
                            className="img-responsive"
                            src={process.env.PUBLIC_URL+"/assets/img/"+ product.typeProduct + "/"+ product.picProduct}
                            alt={product.nameProduct}
                            width="120"
                            height="80"
                          />
                        </div>
                        <div className=" col-12 text-center  text-sm-center col-sm-12 text-md-left col-md-8 text-lg-left col-lg-4">
                          <h4 className="product-name">
                            <strong>{product.nameProduct}</strong>
                         </h4>
                       <h6 className="product-name">
                            <strong> Unit price : {product.priceProduct}/{product.unitProduct} </strong>
                       </h6>
                          
                        </div>
                        <div className="col-12 col-sm-12 text-sm-center col-md-12 col-lg-6 text-md-right text-lg-right row pt-3">
                          <div className="col-12 col-sm-6 col-md-6 col-lg-6 pt-2 pb-2  text-center">
                            <span className="toale-product"> Total Product : {product.amountProduct} </span>
                          </div>
                          <div className="col-6 col-sm-3 col-md-4 text-md-center col-lg-4 text-center">
                            <div className="quantity">
                              <div className="btn-group " role="group">
                                <button type="button" className="btn btn-info" onClick={()=>this.props.editQt(product.refProduct , "minus")}>
                                  -
                                </button>
                                <span className="btn btn-light">{product.countProduct}</span>
                                <button type="button" className="btn btn-info" onClick={()=>this.props.editQt(product.refProduct , "plus")}>
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-sm-2 col-md-2 col-lg-2 text-md-right text-lg-right text-center">
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
                  Total Ordres: <b>{(total).toFixed(2)}</b>
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
  return {
    listProducts: state.cartR.listProducts,
        token: state.loginR.token,
        user: state.loginR.user,
        logged : state.loginR.logged,
  };
};

const mapActionToState = (dispatch) => {
  
  return {
    
    editQt: (ref , operator) => dispatch(editQt(ref , operator)),
    deleteProduct :(ref ) => dispatch(deleteProduct(ref))

  }

}

export default connect(mapStateToProps, mapActionToState)(shippingCart);
