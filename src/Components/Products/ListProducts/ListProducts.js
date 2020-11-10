import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "../CardProduct/CardProduct";
import "./ListProducts.css";

const ListProduct = (props) => {
  const [products, setProducts] = useState([]);
  const typeProduct = props.match.params.idCategory;
 

  useEffect(() => {

    fetchAllProduct(typeProduct);

  }, [typeProduct]); // eslint-disable-line react-hooks/exhaustive-deps

  const connectApi = async (linkOfApi) =>{

    const request = await axios.get(linkOfApi).catch(error => {
      console.log(error.message)
    });
      setProducts(request.data["hydra:member"])

  }

  const fetchAllProduct = (typeProduct) => {
    let linkOfApi = "";
    if (typeProduct === undefined) { 

     linkOfApi = "http://127.0.0.1:8000/api/products?promo[gt]=0&page=1&itemsPerPage=25"
     connectApi(linkOfApi)

    } else {

      linkOfApi = "http://127.0.0.1:8000/api/categories/" + typeProduct + "/products?page=1&itemsPerPage=30";
      connectApi(linkOfApi)

    }
 }


 
  


  return (
    <>
      <div className="row result-row">
                
        {
          products.map((product) => {
            return (<CardProduct product={product} key={product.ref} />)
        })
    }
            
      </div>
    </>
  );
};

export default ListProduct;

