import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "../CardProduct/CardProduct";
import "./ListProducts.css";

const ListProduct = (props) => {
  const [products, setProducts] = useState([]);
  const typeProduct = props.match.params.product;


  useEffect(() => {

    fetchAllProduct();













    const fetchProductType = () => {
      setProducts(
        props.allProducts.products.filter((product) => {

         if (typeProduct === undefined) {
           
            return product.promo >0
         } else {

           return product.type === typeProduct;
         }
         
        })
      );
    };

    fetchProductType();
  }, [typeProduct]); // eslint-disable-line react-hooks/exhaustive-deps



  const fetchAllProduct = () => {
  
    axios.get("http://127.0.0.1:8000/api/products?page=3&itemsPerPage=30")
      .then(request => {
       // console.log(request.data["hydra:member"])
        request.data["hydra:member"].map(product => {
          console.log(product.category.name)

        })
     
      })
      .catch()

}






  const listp = products.map((product) => {
    return <CardProduct product={product} key={product.ref} />;
  });

  // const titleProduct =
  //   typeProduct.charAt(0).toUpperCase() + typeProduct.slice(1);

  return (
    <>
     
      <div className="row result-row">{listp}</div>
    </>
  );
};

export default ListProduct;

