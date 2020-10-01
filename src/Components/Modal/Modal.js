import React from "react";

const Modal = ({ product, price }) => {
  return (
    <div
      className="modal "
      id={`${product.ref}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-5">
                <img
                  className="card-img"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/" +
                    product.type +
                    "/" +
                    product.pic
                  }
                  alt={product.name}
                />
              </div>
              <div className="col-7">
                <p>Modal body text goes here.</p>
                <div className="price-wrap h6 mt-3">
                  $ {price}/ {product.unite}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              <i className="fa fa-shopping-cart cart"></i> Add To Cate
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
