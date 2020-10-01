import React, { useEffect, useState } from "react";
import CardProduct from "../CardProduct/CardProduct";

const ListProducts = ({ allProducts, history }) => {
  const [products, setProducts] = useState([]);

  // console.log(history);
  useEffect(() => {
    setProducts(
      allProducts.products.filter((product) => {
        return product.promo > 0;
      })
    );
    //console.log(allProducts.products);
    //console.log(products);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // console.log(keyProduct);
  const listp = products.map((product) => {
    //console.log(product);
    return <CardProduct product={product} key={product.ref} />;
  });

  return (
    <>
      <h1>Our promotions</h1>
      <div className="row">{listp}</div>
    </>
  );
};

export default ListProducts;
