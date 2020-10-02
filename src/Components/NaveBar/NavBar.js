import React, { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = (props) => {
  const [searchText, setSearchText] = useState("");

useEffect(() => {
  onHandelKeyUp()
}, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  //console.log(props);
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
      <nav className=" d-flex navbar navbar-expand-lg navbar-dark bg-warning">
        <NavLink className="navbar-brand" to="/">
          Zarga Market
          <i className="fa fa-shopping-cart ml-2"></i>
        </NavLink>

        <div className=" collapse navbar-collapse" id="navbarColor01">
          <form
            className="ml-auto form-inline my-2 my-lg-0"
           
          >
            <input
              className="form-control mr-sm-2"
              type="search"
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
