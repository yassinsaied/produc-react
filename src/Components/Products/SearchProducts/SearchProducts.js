import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import Pagination from "../../../Ui/Pagination/Pagination"
import Spinner from "../../../Ui/Spinner/Spinner"
import {fastSearchProducts} from "../../../Services/searchApi"
import "./SearchProducts.css";

const SearchResult = (props) => {
  const [search, setSearch] = useState({
    // isLoading: true,
    searchText: "",
    searchResults: []
    
  });

  const [pagination, setPagination] = useState({
    totalItems: 0,
    currentPage: 1 ,
    loding: true,
    itemsPerPage : 2

  })

  useEffect(() => {
    handleSearch( undefined,1);
  }, [props.location.state]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = async (typeProduct ,currentPage) => {
     setPagination({
          ...pagination,
           loding: true,
                 
        })


     if (props.location.state) {
     
        // console.log(pagination.itemPerpage ,pagination.currentPage )

        const searchText = props.location.state.searchText;
        const dataResult = await fastSearchProducts(searchText, currentPage, pagination.itemsPerPage)
       
        const resultSearch = dataResult["hydra:member"]
        const totalitemResult = dataResult["hydra:totalItems"]
        setSearch({ searchText: searchText, searchResults: resultSearch });
        setPagination({
          
          totalItems: totalitemResult,
          currentPage: currentPage ,
          loding: false,
          itemsPerPage : 10
                 
        })
    }


  };

  // const listp = search.searchResults.map((product) => {
  //   //console.log(product);
  //   return <CardProduct product={product} key={product.ref} />;
  // });

  return (
    <>
      <div className="row result-row">

       {  pagination.loding ? 

          <div className="row spinner">
           <Spinner/>

          </div>

          :

          <div className="row listProducts">
                        
            {
              search.searchResults.map((product) => {
                return (<CardProduct product={product} key={product.id} />)
            })
           }

           {pagination.totalItems > pagination.itemsPerPage &&
            <div className="row pagination m-4">
                  <Pagination itemsPerPage={pagination.itemsPerPage} totalItems={pagination.totalItems} currentPage={pagination.currentPage}  typeProduct={undefined} clickPage={handleSearch} />
            </div>      
          }
          </div>
        } 

    </div>

    </>
  );
};

export default SearchResult;
