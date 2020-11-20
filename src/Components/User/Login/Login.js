import React, { Component}from 'react';
import "./Login.css";
import Input from "../../../Ui/Input/Input";
//import AuthApi from "../../../Services/authApi"
import { connect } from "react-redux";
import {login}from "../../../Store/actions/actionLoginUser"




const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

class Login extends Component{
  
    state = {
        credentials: {
            username: "",
            password : ""
        },
        errors: {
            username: { isValid: true, message: "", touched: false },
            password: { isValid: true, message: "", touched: false },
            },
        validForm: null 

    }
    

 onHhandleChange = (event) => {

        const value = event.currentTarget.value;  
        const name =  event.currentTarget.name; 
        const errorsForm = { ...this.state.errors };
      
        switch (name) {
            case "username":
                 errorsForm.username.touched = true;
                if (!validEmailRegex.test(value) || value.trim() === "") {
                    errorsForm.username.message = "username must be 3 charcter long"
                    errorsForm.username.isValid = false
                } else {
                    errorsForm.username.message = ""
                    errorsForm.username.isValid = true
                }
       
                break;
            case "password":
                errorsForm.password.touched = true;
                if (value.length < 6 || value.trim() === "") {
                    errorsForm.password.message = "password must be 6 charcter long"
                    errorsForm.password.isValid = false
                } else {
                    errorsForm.password.message = ""
                    errorsForm.password.isValid = true
                }
               break;
    
            default:
                break;
        }
         
           this.setState({
               ...this.state,
               credentials:  {...this.state.credentials , [name]: value} ,
               errors: errorsForm,
               validForm : null
       })
 
     }

   onHandelSubmit = (event) =>{
       
        event.preventDefault();
        let     allFormValid;
        const errorsForm = {...this.state.errors}
        Object.entries(errorsForm).forEach((error) => {
       
            if ((!error[1].isValid && error[1].touched )|| (error[1].isValid && !error[1].touched)) {
                allFormValid = false  
                errorsForm[error[0]].message = error[0] + " is Required ";
                errorsForm[error[0]].isValid = false;
            } else {
                
                allFormValid = true;  
            }
        });  

         this.setState({ 
           ...this.state,
           errors: errorsForm,
           validForm : allFormValid
        });
   
   }


render() {
     
     if (this.state.validForm === true) {
         console.log(this.state.credentials)
         this.props.onLogin(this.state.credentials)
          
     
   }

    return (<>
      <div className="login-container">
                    <h4>Login </h4>
            <form className="mx-auto formLogin" onSubmit={(event) => { this.onHandelSubmit(event) }}>
                      <div className="form-group">
                    
                      <Input typeInput="email" placeholder="Your Email"   inputValue={this.state.credentials.username}  changeInput={(event) => {this.onHhandleChange(event) }}  label="Email" name="username" id="email"     inputValid={this.state.errors.username.isValid} errorMessage={this.state.errors.username.message }/>
                           
                        </div>
                        <div className="form-group">
                    <Input typeInput="password" placeholder="Your Password" inputValue={this.state.credentials.password} changeInput={(event) => {this.onHhandleChange(event) }}  label="Password" name="password" id="password"  inputValid={this.state.errors.password.isValid} errorMessage={this.state.errors.password.message }/>
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
        token: state.loginR.token,
        user: state.loginR.user,
        logged : state.loginR.logged,
          

   } 
}
const mapDispatcheToProps = (dispatch) => {
    return {

        onLogin: (credentials) => {
            dispatch(login(credentials))
          
        }  
     


    }
}

export default connect(mapStateToProps, mapDispatcheToProps)(Login) ;