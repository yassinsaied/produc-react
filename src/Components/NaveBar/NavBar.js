import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"
import{logout} from "../../Store/actions/actionLoginUser"
import Login from "../User/Login/Login"

import "./NavBar.css";

class NavBar  extends Component {
  // const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   onHandelKeyUp();
  // }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

 
  
  
  // const onHandelChange = (event) => {
  //   const value = event.currentTarget.value;
  //   setSearchText(value);
  // };

  // const onHandelKeyUp = (event) => {
  //   if (searchText) {
  //     let text = searchText;
  //     props.history.push({
  //       pathname: "/search/" + text,
  //       state: { searchText: text },
  //     });
  //   } else {
  //     props.history.push("/");
  //   }
  // };
 onHandelLogout = () => {
   // logout()
     console.log(this.props.logged)
  }
render() {
  return (
    <>
          
    <nav className="mb-1 d-flex navbar navbar-expand-lg navbar-dark bg-info">
      
       <NavLink className="navbar-brand" to="/">
              Bio Market
              <i className="fa fa-shopping-cart ml-2"></i>
       </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-333">

        <form className="form-inline navbar-nav mr-auto">
            <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      // onChange={onHandelChange}
                      // onKeyUp={onHandelKeyUp}
                      // value={searchText}
                    />
          </form>

      
        <ul className="navbar-nav ml-auto nav-flex-icons">
          
          <li className="nav-item">
                <NavLink className="btn btn-warning pannier" to="/shippingcart">
                    <i className="fa fa-shopping-cart mr-2"></i>
                  <span className="badge badge-light">{this.props.nbrOrder}</span>
                  </NavLink>
          </li>   
         {!this.props.logged ?
            <>        
                <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle" id="login-subemenu" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      Login
                      <i className="fa fa-user"></i>
                    </span>
                    <div className="dropdown-menu dropdown-menu-right dropdown-default"
                      aria-labelledby="login-subemenu">
                    <Login/>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="register-subemenu" data-toggle="dropdown">
                    Register
                      <i className="fa fa-user-plus"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-default"
                      aria-labelledby="register-subemenu">
                    
                    </div>

              </li>
            </> 
                :

            <>
              <li className="nav-item" onClick={this.onHandelLogout}>
                  <span className="nav-link" >
                    Logout
                    <i className="fa fa-sign-out"></i>
                </span>
                    
              </li>  
            </>
       }


        </ul>
      </div>
    </nav>



</>































  );

}
};
const mapStateToProps = (state) =>{

  return {
  nbrOrder: state.cartR.listProducts.length,
  token : state.loginR.token ,
  logged :  state.loginR.logged,
  user :   state.loginR.user

  }

}


const mapDispatchToProps = (dispatch) =>{

return {
 
  logout: () =>  dispatch(logout())
 
}

}

export default connect(mapStateToProps)(NavBar);
