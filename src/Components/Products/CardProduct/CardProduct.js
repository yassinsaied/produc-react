import React, { useState, useEffect } from "react";
import "./CardProduct.css";
import Modal from "../../Modal/Modal";

const CardProduct = ({ product }) => {
  const [promoProduct, setPromoProduct] = useState({
    newPrice: product.price,
    oldPrice: 0,
    promo: false,
  });

  useEffect(() => {
    if (product.promo > 0) {
      setPromoProduct({
        newPrice: (product.price * product.promo) / 100,
        oldPrice: product.price,
        promo: true,
      });
    }
  }, [promoProduct.promo]); // eslint-disable-line react-hooks/exhaustive-deps

  const pricePromo = promoProduct.promo ? (
    <>
      <span className="price-new">
        $ {promoProduct.newPrice}/{product.unite}
      </span>{" "}
      <del className="price-old">$ {promoProduct.oldPrice}</del>
    </>
  ) : (
    <>
      <span className="price-new">
        ${promoProduct.newPrice}/{product.unite}
      </span>
    </>
  );

  return (
    <>
      <div className="col-12 col-sm-8 col-md-6 col-lg-3">
        <div className="card mb-2">
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
          {promoProduct.promo && (
            <div className="card-img-overlay d-flex">
              <span className="card-link text-danger like">
                <span className="badge badge-danger badge-pill badge-news">
                  Promotion
                </span>
              </span>
            </div>
          )}
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>

            <p className="card-text">
              The Vans All-Weather MTE Collection features footwear and apparel
            </p>

            <div className="buy d-flex justify-content-between align-items-center">
              <div className="price-wrap h6 mt-3">{pricePromo}</div>

              <button
                className="btn btn-info mt-3 cart "
                data-toggle="modal"
                data-target={`#${product.ref}`}
              >
                {/* <i className="fa fa-shopping-cart"></i> Add to Cart  */}
                <i className="fa fa-shopping-cart cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal product={product} newPrice={promoProduct.newPrice} />
    </>
  );
};

export default CardProduct;
