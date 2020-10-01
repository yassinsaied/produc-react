import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = (props) => {
  const [searchText, setSearchText] = useState("");

  //console.log(props);
  const onHandelChange = (event) => {
    const value = event.currentTarget.value;
    setSearchText(value);
  };

  const onHandelKeyUp = (event) => {
    if (event.key === "Enter" && event.keyCode === 13) {
      event.preventDefault();
      onHandelSubmit();
    }
  };

  const onHandelSubmit = (event) => {
    event.preventDefault();
    if (searchText) {
      let text = searchText;
      setSearchText("");
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
      <nav className=" d-flex navbar navbar-expand-lg navbar-dark bg-warning">
        <NavLink className="navbar-brand" to="/">
          Zarga Market
          <i className="fa fa-shopping-cart ml-2"></i>
        </NavLink>

        <div className=" collapse navbar-collapse" id="navbarColor01">
          <form
            className="ml-auto form-inline my-2 my-lg-0"
            onSubmit={onHandelSubmit}
          >
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              onChange={onHandelChange}
              onKeyUp={onHandelKeyUp}
              value={searchText}
            />
            <button className="btn btn- btn-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
