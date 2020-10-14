import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

const sidMenu = () => {
  return (
    <>
      <nav className="nav flex-column ">
        <NavLink to="/vegetables" className="nav-link" activeClassName="active">
          Vegetables{" "}
        </NavLink>
        <NavLink to="/fruits" className="nav-link">
          Fruits
        </NavLink>
        <NavLink to="/fresh" className="nav-link ">
          Fresh products
        </NavLink>
        <NavLink to="/grocerys" className="nav-link  ">
          Grocerys{" "}
        </NavLink>
        <NavLink to="/drinks" className="nav-link ">
          {" "}
          Drinks
        </NavLink>
        <NavLink to="/products/other" className="nav-link ">
          {" "}
          Other...
        </NavLink>
            <NavLink to="/checkout" className="nav-link ">
          Checkout
        </NavLink>
      </nav>
    </>
  );
};

export default sidMenu;
