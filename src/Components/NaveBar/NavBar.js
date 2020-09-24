import React from "react"
import "./NavBar.css"


const naveBar = () => {
    return ( 
<>
<nav className=" d-flex navbar navbar-expand-lg navbar-dark bg-warning">
  <a className="navbar-brand" >
    Zarga Market
    <i className="fa fa-shopping-cart ml-2"></i>
    </a>

  <div className=" collapse navbar-collapse" id="navbarColor01">
      

    <form className="ml-auto form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn- btn-info my-2 my-sm-0" type="submit">Search</button>
    </form>

  </div>
</nav>
</>




     );
}
 
export default naveBar;