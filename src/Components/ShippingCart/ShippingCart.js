import React, { Component } from "react";
import { connect } from "react-redux";

import "./ShippingCart.css";

class shippingCart extends Component {
  render() {
    console.log(this.props.listProducts);
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
            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-2 text-center">
                <img
                  className="img-responsive"
                  src="http://placehold.it/120x80"
                  alt="prewiew"
                  width="120"
                  height="80"
                />
              </div>
              <div className=" col-12 text-center  text-sm-center col-sm-12 text-md-left col-md-8 text-lg-left col-lg-6">
                <h4 className="product-name">
                  <strong>Product Name</strong>
                </h4>
                <h4>
                  <small>Product description</small>
                </h4>
              </div>
              <div className="col-12 col-sm-12 text-sm-center col-md-12 col-lg-4 text-md-right row pt-3">
                <div className="col-4 col-sm-3 col-md-3 pt-2">
                  <h6 className="text-center"> 25.00 </h6>
                </div>
                <div className=" col-4 col-sm-6 col-md-6 text-md-center">
                  <div className="quantity">
                    <div className="btn-group " role="group">
                      <button type="button" className="btn btn-info">
                        -
                      </button>
                      <span className="btn btn-light">0</span>
                      <button type="button" className="btn btn-info">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-sm-3 col-md-3 text-right">
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-xs"
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-12 text-right">
                <span className="mr-2">
                  Total price: <b>50.00€</b>
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

export default connect(mapStateToProps)(shippingCart);
