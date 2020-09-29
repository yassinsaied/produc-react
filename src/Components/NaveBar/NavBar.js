import React , {useState}from "react";
import "./NavBar.css";

const NavBar = () => {

  const [searchText , setSearchText] = useState("");

  const onHandelChange = (event) =>{
  
    const value = event.currentTarget.value;
    setSearchText(value)
  }

  const onHandelKeyUp = (event) => {
    event.preventDefault();
    if (event.key === 'Enter' && event.keyCode === 13) {
      onHandelSubmit();
    }

  }

  const onHandelSubmit = () =>{


    

  }

  


  return (
    <>
      <nav className=" d-flex navbar navbar-expand-lg navbar-dark bg-warning">
        <span className="navbar-brand">
          Zarga Market
          <i className="fa fa-shopping-cart ml-2"></i>
        </span>

        <div className=" collapse navbar-collapse" id="navbarColor01">
          <form className="ml-auto form-inline my-2 my-lg-0" onSubmit={onHandelSubmit}>
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              onChange={onHandelChange}
              onKeyUp  = {onHandelKeyUp}
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
