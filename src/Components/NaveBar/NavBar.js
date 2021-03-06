import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"
import{logout} from "../../Store/actions/actionLoginUser"
import Input from "../../Ui/Input/Input"

import "./NavBar.css";

class NavBar extends Component {

  state = {
     searchText : ""

  }

  componentDidMount() {
    this.onHandelKeyUp()
   
   
  }

  onHandelChange = (event) => {
     const value = event.currentTarget.value;
     this.setState({
     searchText : value
     })
   
  };

  onHandelKeyUp = (event) => {
     
    if (this.state.searchText !== "") {

         this.props.history.push({
         pathname: "/search/" + this.state.searchText,
         state: { searchText: this.state.searchText },
         });
       
    } else {
      
           this.props.history.push("/");
     }
  };


 onHandelLogout = () =>{
      this.props.logout() 
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
      
            <Input typeInput="search" placeholder="Search" inputValue={this.state.searchText} changeInput={(event) => { this.onHandelChange(event) }} label="" name="search" id="search" KeyUpInput={(event) => this.onHandelKeyUp(event)} inputValid={true} />
        
        </form>
         
        <ul className="navbar-nav ml-auto nav-flex-icons">
          
          <li className="nav-item">
                <NavLink className="btn btn-warning pannier" to="/shippingcart">
                    <i className="fa fa-shopping-cart mr-2"></i>
                  <span className="badge badge-light">{this.props.nbrOrder}</span>
                  </NavLink>
          </li>   
        { !this.props.logged &&
                <>  
              
                  <li className="nav-item dropdown">
                      <button className="nav-link dropdown-toggle  btn btn-link" id="login-subemenu" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="true">
                    <i className="fa fa-user"></i>
                        My Account
                       
                      </button>
                      <div className="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="login-subemenu">
                                        
                      <li className="nav-item" >
                        <NavLink className="dropdown-item" to="/login">Login</NavLink>
                  </li>
                  
                      <li className="nav-item" >
                        <NavLink className="dropdown-item" to="/register">Register</NavLink>
                  </li>
                  
                      </div>
                  </li>
                 
            
                </> 
              }
              {this.props.logged &&
                <>
                  <li className="nav-item">
                      <span className="nav-link"> {this.props.user.firstName && ("hi ," + this.props.user.firstName)}</span>                    
                  </li>  
                  <li className="nav-item">
                      <button className="nav-link btn btn-link" onClick={this.onHandelLogout} >
                        Logout 
                        <i className="fa fa-sign-out"></i>
                    </button>
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

export default connect(mapStateToProps , mapDispatchToProps)(NavBar);
