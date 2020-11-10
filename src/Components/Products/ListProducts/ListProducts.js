import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "../CardProduct/CardProduct";
import Pagination from "../../../Ui/Pagination/Pagination"
import "./ListProducts.css";

const ListProduct = (props) => {
  const [products, setProducts] = useState([]);
  const [totalItems , setTotalItems] = useState(0);
  const [currentPage , setCurrentPage] = useState(1)
  const itemsPerPage = 25 ;
  const typeProduct = props.match.params.idCategory;

 

  useEffect(() => {

    fetchAllProduct(typeProduct , 1);

  }, [typeProduct]); // eslint-disable-line react-hooks/exhaustive-deps

  const connectApi = async (linkOfApi) =>{

    const request = await axios.get(linkOfApi).catch(error => {
      console.log(error.message)
    });
      setProducts(request.data["hydra:member"])
      setTotalItems(request.data["hydra:totalItems"])
     
      console.log(request)

  }

  const fetchAllProduct = (typeProduct , currentPage) => {

     let linkOfApi = "";
     setCurrentPage(currentPage) ;
     console.log(currentPage)

    if (typeProduct === undefined) { 

     linkOfApi = "http://127.0.0.1:8000/api/products?promo[gt]=0&page="+currentPage+"&itemsPerPage=25"
     connectApi(linkOfApi)

    } else {

      linkOfApi = "http://127.0.0.1:8000/api/categories/" + typeProduct + "/products?page="+currentPage+"&itemsPerPage=30";
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
      <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} currentPage={currentPage} typeProduct={typeProduct} clickPage={fetchAllProduct} />

    </>
  );
};

export default ListProduct;

