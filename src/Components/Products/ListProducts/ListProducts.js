import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "../CardProduct/CardProduct";
import Pagination from "../../../Ui/Pagination/Pagination"
import Spinner from "../../../Ui/Spinner/Spinner"
import "./ListProducts.css";

const ListProduct = (props) => {
  const [products, setProducts] = useState([]);
  const [totalItems , setTotalItems] = useState(0);
  const [currentPage , setCurrentPage] = useState(1)
  const [loding , setLoding] = useState(true)
  const itemsPerPage = 10 ;
  const typeProduct = props.match.params.idCategory;

 

  useEffect(() => {

    fetchAllProduct(typeProduct , 1);

  }, [typeProduct]); // eslint-disable-line react-hooks/exhaustive-deps

  const connectApi = async (linkOfApi) =>{

    setLoding(true);

    const request = await axios.get(linkOfApi).catch(error => {
      console.log(error.message)

    });

    if(!request.error){
      setProducts(request.data["hydra:member"]);
      setTotalItems(request.data["hydra:totalItems"]);
      setLoding(false) ;
    }else {

      setLoding(true);

    }
     

  }

  const fetchAllProduct = (typeProduct , currentPage) => {

     let linkOfApi = "";
     setCurrentPage(currentPage) ;
  
    if (typeProduct === undefined) { 

     linkOfApi = "http://127.0.0.1:8000/api/products?promo[gt]=0&page="+currentPage+"&itemsPerPage=10"
     connectApi(linkOfApi)

    } else {

      linkOfApi = "http://127.0.0.1:8000/api/categories/" + typeProduct + "/products?page="+currentPage+"&itemsPerPage=10";
      connectApi(linkOfApi)

    }
 }

 
  return (
    <>
      <div className="row result-row">

       {  loding ? 

          <div className="row spinner">
           <Spinner/>

          </div>

          :

          <div className="row listProducts">
                        
            {
              products.map((product) => {
                return (<CardProduct product={product} key={product.id} />)
            })
        }
            <div className="row pagination m-4">
                  <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} currentPage={currentPage} typeProduct={typeProduct} clickPage={fetchAllProduct} />
            </div>      

          </div>
        } 

    </div>

    </>
  );
};

export default ListProduct;

