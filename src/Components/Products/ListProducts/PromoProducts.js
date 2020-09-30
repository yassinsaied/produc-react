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

  return (
    <>
      <h1>Our promotions</h1>
      <div className="row">{listp}</div>
    </>
  );
};

export default ListProducts;
