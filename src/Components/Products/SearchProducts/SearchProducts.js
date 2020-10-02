import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./SearchProducts.css"


const SearchResult = (props) => {
  const [search, setSearch] = useState({
    // isLoading: true,
    searchText: "",
    searchResults: [],
  });

  useEffect(() => {
    handleSearch();
  }, [props.location.state]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = () => {
    console.log(props.location.state);
    if (props.location.state) {
      const text = props.location.state.searchText;
      const ressult = props.allProducts.products.filter((product) => {
        return (
          product.name.toLowerCase().includes(text.toLowerCase()) ||
          product.type.toLowerCase() === text.toLowerCase()
        );
      });
      setSearch({ searchText: text, searchResults: ressult });
    }
  };

  const listp = search.searchResults.map((product) => {
    //console.log(product);
    return (
      <CardProduct
       product={product} key={product.ref} />
     
    );
  });

  return (
    <>
 
      <h1>Result Of {search.searchText}</h1>
      <div className="row result-row">{listp}</div>
     
    </>
  );
};

export default SearchResult;
