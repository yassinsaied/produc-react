import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";

const sidMenu = () => {
  return (
    <>
      <nav className="nav flex-column ">
        <NavLink to="/products/vegetables" className="nav-link" activeClassName="active">
          Vegetables{" "}
        </NavLink>
        <NavLink to="/products/fruits" className="nav-link">
          Fruits
        </NavLink>
        <NavLink to="/products/fresh" className="nav-link ">
          Fresh products
        </NavLink>
        <NavLink to="/products/grocerys" className="nav-link  ">
          Grocerys{" "}
        </NavLink>
        <NavLink to="/products/drinks" className="nav-link ">
          {" "}
          Drinks
        </NavLink>
        <NavLink to="/products/other" className="nav-link ">
          {" "}
          Other...
        </NavLink>
      </nav>
    </>
  );
};

export default sidMenu;
