import React, { Component}from 'react';
import "./Login.css";
import Input from "../../../Ui/Input/Input";
import Spinner from "../../../Ui/Spinner/Spinner"
import { connect } from "react-redux";
import {login , onChange , onSubmit}from "../../../Store/actions/actionLoginUser"






class Login extends Component{
  
      
  componentWillUpdate(nextProps, nextState) {

     if (nextProps.formType === "credentials" && nextProps.formType !== this.props.formType) {
      if (nextProps.validForm === true && (this.props.validForm === false || (this.props.validForm === true && this.props.logged === false))) {
           this.props.onLogin(this.props.credentials);
         
      }
    }

  }
    


    render() {
    
    

    return (<>
      <div className="login-form">
        <form className="mx-auto formLogin" onSubmit={(event) => { this.props.onHandelSubmit(event, "credentials") }}>
          {!this.props.loding ?             
            <> 
                        <h4>Login </h4>
                        <div className="form-group">
                            <Input typeInput="email" placeholder="Your Email"   inputValue={this.props.credentials.username}  changeInput={(event) => {this.props.onHandleChange(event , "credentials" ) }}  label="" name="username" id="email"     inputValid={this.props.errors.username.isValid} errorMessage={this.props.errors.username.message }/>
                        </div>
                          <div className="form-group">
                            <Input typeInput="password" placeholder="Your Password" inputValue={this.props.credentials.password} changeInput={(event) => {this.props.onHandleChange(event , "credentials") }}  label="" name="password" id="password"  inputValid={this.props.errors.password.isValid} errorMessage={this.props.errors.password.message }/>
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-info">Login</button>
                          </div>
                          <div className="form-group">
                              <span>Forget Password?</span>
                        </div>
              </>
            :
                    <Spinner/>


           } 
          </form>
          
    </div>
    </>)
    }

}
const mapStateToProps = (state) => {
    return {
        credentials: state.loginR.credentials,
        errors :   state.loginR.errors,
        token:     state.loginR.token,
        user:      state.loginR.user,
        logged:    state.loginR.logged,
        validForm: state.loginR.validForm,
        formType: state.loginR.formType,
        loding : state.loginR.loding,
          

   } 
}
 const mapDispatchToProps = (dispatch) => {
     return {
        
     onHandleChange : (event , cridentialsType) => dispatch(onChange(event , cridentialsType)) ,
     onHandelSubmit : (event , cridentialsType) => dispatch(onSubmit(event , cridentialsType ))  ,  
     onLogin: (credentialsLogin) =>  dispatch(login(credentialsLogin))
 
    
   }
 }

export default connect(mapStateToProps , mapDispatchToProps)(Login) ;