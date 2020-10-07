import React from "react";
import { NavLink } from "react-router-dom";

import "./SideMenu.css";

const sidMenu = () => {
  return (
    <>
      <nav className="nav flex-column">
        <NavLink to="/products/vegetables" className="nav-link text-info">
          Vegetables{" "}
        </NavLink>
        <NavLink to="/products/fruits" className="nav-link text-info">
          Fruits
        </NavLink>
        <NavLink to="/products/fresh" className="nav-link text-info">
          Fresh products
        </NavLink>
        <NavLink to="/products/grocerys" className="nav-link text-info ">
          Grocerys{" "}
        </NavLink>
        <NavLink to="/products/drinks" className="nav-link text-info ">
          {" "}
          Drinks
        </NavLink>
        <NavLink to="/products/other" className="nav-link text-info ">
          {" "}
          Other...
        </NavLink>
      </nav>
    </>
  );
};

export default sidMenu;
