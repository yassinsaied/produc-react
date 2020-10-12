import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"

import "./NavBar.css";

const NavBar = (props) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    onHandelKeyUp();
  }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(props.listProducts);
  const onHandelChange = (event) => {
    const value = event.currentTarget.value;
    setSearchText(value);
  };

  const onHandelKeyUp = (event) => {
    if (searchText) {
      let text = searchText;
      props.history.push({
        pathname: "/search/" + text,
        state: { searchText: text },
      });
    } else {
      props.history.push("/");
    }
  };

  return (
    <>
      <nav className=" d-flex navbar navbar-expand-lg navbar-dark bg-info">
        <NavLink className="navbar-brand" to="/">
          Bio Market
          <i className="fa fa-shopping-cart ml-2"></i>
        </NavLink>
        <div className=" collapse navbar-collapse" id="navbarColor01">
          <form className="ml-auto form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              onChange={onHandelChange}
              onKeyUp={onHandelKeyUp}
              value={searchText}
            />
          </form>

          <NavLink className="btn btn-warning pannier" to="/shippingcart">
            <i className="fa fa-shopping-cart mr-2"></i>
            <span className="badge badge-light">{props.nbrOrder}</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
const mapStateToProps = (state) =>{

  return {
  nbrOrder: state.cart.listProducts.length,

  }

}

export default connect(mapStateToProps)(NavBar);
