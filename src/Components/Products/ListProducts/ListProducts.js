import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./ListProducts.css";

const ListProduct = (props) => {
  const [products, setProducts] = useState([]);
  const typeProduct = props.match.params.product;
  console.log(props.match.params.product);

  useEffect(() => {
    const fetchProductType = () => {
      setProducts(
        props.allProducts.products.filter((product) => {
          return product.type === typeProduct;
        })
      );
    };

    fetchProductType();
  }, [typeProduct]); // eslint-disable-line react-hooks/exhaustive-deps

  const listp = products.map((product) => {
    return <CardProduct product={product} key={product.ref} />;
  });

  const titleProduct =
    typeProduct.charAt(0).toUpperCase() + typeProduct.slice(1);

  return (
    <>
      <h1> list Of {titleProduct}</h1>
      <div className="row result-row">{listp}</div>
    </>
  );
};

export default ListProduct;

