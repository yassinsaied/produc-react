import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import Pagination from "../../../Ui/Pagination/Pagination"
import Spinner from "../../../Ui/Spinner/Spinner"
import {fetchAllProducts}  from "../../../Services/fetchProductsAPI"
import "./ListProducts.css";

const ListProduct = (props) => {
  const [products, setProducts] = useState([]);
  const [totalItems , setTotalItems] = useState(0);
  const [currentPage , setCurrentPage] = useState(1)
  const [loading , setLoading] = useState(true)
  const itemsPerPage = 10 ;
  const typeProduct = props.match.params.idCategory;

 

  useEffect(() => {

    handleProducts(typeProduct , 1 , itemsPerPage);

  }, [typeProduct]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleProducts = async (typeProduct , currentPage ,itemsPerPage ) =>{

    setLoading(true);

    const dataProducts = await fetchAllProducts(typeProduct, currentPage ,itemsPerPage)
   // console.log(dataProducts)
    if(dataProducts){
      setProducts(dataProducts["hydra:member"]);
      setTotalItems(dataProducts["hydra:totalItems"]);
      setCurrentPage(currentPage)
      setLoading(false) ;

    } else {

      setLoading(true);

    }
     

  }



 
  return (
    <>
      <div className="row result-row">

       {  loading ? 

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
        {  totalItems > itemsPerPage &&
            <div className="row pagination m-4">
                  <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} currentPage={currentPage} typeProduct={typeProduct} clickPage={handleProducts} />
            </div>      
          }
           </div>
        
        } 

    </div>

    </>
  );
};

export default ListProduct;

