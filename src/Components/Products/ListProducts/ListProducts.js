import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";

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
    return (
      <CardProduct
        key={product.ref}
        nameProduct={product.name}
        unite={product.unite}
        price={product.price}
        pic={product.pic}
        type={product.type}
      />
    );
  });

  const titleProduct =
    typeProduct.charAt(0).toUpperCase() + typeProduct.slice(1);

  return (
    <>
      <h1> list Of {titleProduct}</h1>
      <div className="row">{listp}</div>
    </>
  );
};

export default ListProduct;
