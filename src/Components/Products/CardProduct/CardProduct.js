import React from "react";

const CardProduct = ({ nameProduct, unite, price, pic, type, keyProduct }) => {
  //console.log(process.env.PUBLIC_URL + "zzz");
  return (
    <div className="col-sm-6 col-md-4 col-lg-3" key={keyProduct}>
      {/* <div className="card border-primary mb-4" >
    <div className="card-header">Header</div>
    <div className="card-body">
        <h4 className="card-title">Secondary card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div> */}

      <div className="card mb-2">
        <img
          className="card-img"
          src={process.env.PUBLIC_URL + "/assets/img/" + type + "/" + pic}
          alt={nameProduct}
        />
        <div className="card-img-overlay d-flex justify-content-end">
          <span className="card-link text-danger like">
            <i className="fa fa-heart"></i>
          </span>
        </div>
        <div className="card-body">
          <h4 className="card-title">{nameProduct}</h4>

          <p className="card-text">
            The Vans All-Weather MTE Collection features footwear and apparel
          </p>

          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-info">
              <h6 className="mt-4">
                {price}$ {""}\ {unite}
              </h6>
            </div>
            <span className="btn btn-info mt-3">
              <i className="fa fa-shopping-cart"></i> Add to Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
