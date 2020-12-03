import React, { Component } from "react"
import "./Register.css"
import Input from "../../../Ui/Input/Input"
import Spinner from "../../../Ui/Spinner/Spinner"
import { onChange, onSubmit, register } from "../../../Store/actions/actionLoginUser"

import { connect } from "react-redux";

class Register extends Component {


     componentDidMount() {
     if ( this.props.logged) {
              this.props.history.replace("/")
        }
    } 


   
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.formType === "registerCredentials" && nextProps.formType !== this.props.formType) {
            
                if (nextProps.validForm === true ) {
                    const userRegister = { 
                        email: this.props.registerCredentials.usernameRegister ,
                        password:  this.props.registerCredentials.passwordRegister ,
                        firstName:  this.props.registerCredentials.firstName,
                        lastName :  this.props.registerCredentials.lastName

                    }
                    this.props.onRegister(userRegister) ;
                
                }
        }
      }
      

    render() {

  
 return (<>      
   
<div className="row justify-content-md-center">
  <div className="signup-form col-12 col-sm-12 col-md-6 col-lg-6">
           
         <form onSubmit={(event) => { this.props.onHandelSubmit(event, "registerCredentials") }}>
      { !this.props.loding ?             
       <> 
          <h4>Sign up</h4>
           { !this.props.registred ?        
               <> <div className="form-group">
                                <Input typeInput="text" placeholder="Your Fist Name" label="" name="firstName" id="firstName" InputValue={this.props.registerCredentials.firstName} changeInput={(event)=> {this.props.onHandleChange(event , "registerCredentials")}} inputValid={this.props.errors.firstName.isValid}  errorMessage={this.props.errors.firstName.message }/>
                </div>
                <div className="form-group">
                                <Input typeInput="text" placeholder="Your Last Name" label="" name="lastName" id="lastName" InputValue={this.props.registerCredentials.lastName}  changeInput={(event)=> {this.props.onHandleChange(event , "registerCredentials")}} inputValid={this.props.errors.lastName.isValid} errorMessage={this.props.errors.lastName.message } />
                </div>
                <div className="form-group">
            
                    <Input typeInput="email" placeholder="Your Email"  label="" name="usernameRegister" id="usernameRegister" InputValue={this.props.registerCredentials.usernameRegister}  inputValid={this.props.errors.usernameRegister.isValid}   changeInput={(event)=> {this.props.onHandleChange(event , "registerCredentials")}}  errorMessage={this.props.errors.usernameRegister.message }/>
                    {/* <Input typeInput="email" placeholder="Your Email"   inputValue={this.props.credentials.username}  changeInput={(event) => {this.props.onHandleChange(event) }}  label="" name="username" id="email"     inputValid={this.props.errors.username.isValid} errorMessage={this.props.errors.username.message }/> */}
                </div>
                <div className="form-group">
                <Input typeInput="password" placeholder="Your Password"  label="" name="passwordRegister" id="passwordRegister" InputValue={this.props.registerCredentials.passwordRegister}  inputValid={this.props.errors.passwordRegister.isValid}  changeInput={(event)=> {this.props.onHandleChange(event , "registerCredentials")}} errorMessage={this.props.errors.passwordRegister.message }/>
                </div>
                <div className="form-group">
                    <Input typeInput="password" placeholder="Confirm Your Password"  label="" name="confirmPassword" id="confirmPassword" InputValue={this.props.registerCredentials.confirmPassword}  inputValid={this.props.errors.confirmPassword.isValid}  changeInput={(event)=> {this.props.onHandleChange(event , "registerCredentials")}} errorMessage={this.props.errors.confirmPassword.message }/>
                </div>        
                <div className="form-group">
                    <label className="form-check-label"><Input typeInput="checkbox" name="terms" id="terms" /> I accept the <span href="#">Terms of Use</span> &amp; <span href="#">Privacy Policy</span></label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-warning  btn-lg btn-block">Register Now</button>
                             </div></>
                         :
                   <p>You must actived your acount from you'r email</p>        
                
                } 
    </>
                 :
    <>          
        <Spinner/>
   </>  
           }
      </form>
	 
    </div>
        
   </div>     
        </>)



    }
}

const mapStateToProps = (state) =>{
  return {

    registerCredentials : state.loginR.registerCredentials,
    errors: state.loginR.errors,
    validForm: state.loginR.validForm ,
    formType: state.loginR.formType,
    loding: state.loginR.loding,
    registred: state.loginR.registred,
    logged:    state.loginR.logged,
  }


}
const mapDispatchToProps = (dispatch) =>{
 return {
     onHandleChange: (event, cridentialsType) => dispatch(onChange(event, cridentialsType)),
     onHandelSubmit: (event, cridentialsType) => dispatch(onSubmit(event, cridentialsType)),
     onRegister : (event ,cridentialsRegiter) => dispatch(register(event,cridentialsRegiter))

 }


}




export default  connect(mapStateToProps,mapDispatchToProps)(Register) ;




