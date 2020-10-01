import React, { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";

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
        key={product.ref}
        nameProduct={product.name}
        unite={product.unite}
        price={product.price}
        pic={product.pic}
        type={product.type}
        promo={product.promo}
      />
    );
  });

  return (
    <>
      <h1>Result Of {search.searchText}</h1>
      <div className="row">{listp}</div>
    </>
  );
};

export default SearchResult;
