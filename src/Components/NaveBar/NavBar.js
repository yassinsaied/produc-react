import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"
import AuthApi from "../../Services/authApi"
import "./NavBar.css";

const NavBar = (props) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    onHandelKeyUp();
  }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  
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

 const  onHandelLogout =() => {
   AuthApi.logout();
  }

  return (
    <>
      <nav className=" d-flex navbar navbar-expand-lg navbar-dark bg-info   d-flex justify-content-between">
        <NavLink className="navbar-brand" to="/">
          Bio Market
          <i className="fa fa-shopping-cart ml-2"></i>
        </NavLink>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>



     

              

      <div className="d-flex justify-content-center" >

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              onChange={onHandelChange}
              onKeyUp={onHandelKeyUp}
              value={searchText}
            />
          </form>

  

          <ul className="nav navbar-nav ml-auto">

             <NavLink className="btn btn-warning pannier" to="/shippingcart">
              <i className="fa fa-shopping-cart mr-2"></i>
             <span className="badge badge-light">{props.nbrOrder}</span>
             </NavLink>

              <li className="nav-item">
               <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
                <span className="nav-link" onClick={onHandelLogout}>Logout</span>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/" >Register</NavLink>
              </li>
          </ul>


        </div>
      </nav>
    </>
  );
};
const mapStateToProps = (state) =>{

  return {
  nbrOrder: state.cartR.listProducts.length,

  }

}

export default connect(mapStateToProps)(NavBar);
