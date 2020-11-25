import React, { Component}from 'react';
import "./Login.css";
import Input from "../../../Ui/Input/Input";
import { connect } from "react-redux";
import {login , onChange , onSubmit}from "../../../Store/actions/actionLoginUser"






class Login extends Component{
  
      
      componentWillUpdate(nextProps, nextState) {
        if (nextProps.validForm === true && (this.props.validForm === false || this.props.validForm === null  )) {
           this.props.onLogin(this.props.credentials) ;
         
        }

      }
    


    render() {
    
    

    return (<>
      <div className="login-container">
                    <h4>Login </h4>
            <form className="mx-auto formLogin" onSubmit={(event) => { this.props.onHandelSubmit(event) }}>
                      <div className="form-group">
                    
                      <Input typeInput="email" placeholder="Your Email"   inputValue={this.props.credentials.username}  changeInput={(event) => {this.props.onHandleChange(event) }}  label="" name="username" id="email"     inputValid={this.props.errors.username.isValid} errorMessage={this.props.errors.username.message }/>
                           
                        </div>
                        <div className="form-group">
                    <Input typeInput="password" placeholder="Your Password" inputValue={this.props.credentials.password} changeInput={(event) => {this.props.onHandleChange(event) }}  label="" name="password" id="password"  inputValid={this.props.errors.password.isValid} errorMessage={this.props.errors.password.message }/>
                        </div>
                        <div className="form-group">
                           <button type="submit" className="btn btn-info">Login</button>
                        </div>
                        <div className="form-group">
                            <span>Forget Password?</span>
                        </div>
                    </form>
                </div>
    </>)
    }

}
const mapStateToProps = (state) => {
    return {
        credentials: state.loginR.credentials,
        errors : state.loginR.errors,
        token: state.loginR.token,
        user: state.loginR.user,
        logged: state.loginR.logged,
        validForm : state.loginR.validForm
          

   } 
}
 const mapDispatchToProps = (dispatch) => {
     return {
        
     onHandleChange : (event) => dispatch(onChange(event)) ,
     onHandelSubmit : (event) => dispatch(onSubmit(event ))  ,  
     onLogin: (credentials) =>  dispatch(login(credentials))
 
    
   }
 }

export default connect(mapStateToProps , mapDispatchToProps)(Login) ;