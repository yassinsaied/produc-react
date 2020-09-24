import React from 'react';
import "./SideMenu.css"


const sidMenu = () => {
    return (
      <>  
    <div className="col-sm-2 side-menu">
        <nav className="nav flex-column">
        <a className="nav-link text-info active" href="#">Légume </a>
        <a className="nav-link text-info active" href="#">Fruits</a>
        <a className="nav-link text-info" href="#">Produit Frais </a>
       <a className="nav-link text-info " href="#">Epicerie </a>
        <a className="nav-link text-info " href="#"> Boisson</a>
     <a className="nav-link text-info " href="#"> Autre...</a>
     </nav>

  </div>

</>

      );
}
 
export default sidMenu;