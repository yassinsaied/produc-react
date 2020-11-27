import React, { Component } from "react"
import "./Register.css"
import Input from "../../../Ui/Input/Input"
import { onChange } from "../../../Store/actions/actionLoginUser"
import { connect } from "react-redux";

class Register extends Component {



    render() {

        return (<>
{/*         
              <div className="register-container">
                    <h4>Sign up </h4>
            <form className="mx-auto formLogin">
                      <div className="form-group">
                    
                      <Input typeInput="email" placeholder="Your Email"  />
                           
                        </div>
                        <div className="form-group">
                    <Input typeInput="password" placeholder="Your Password" />
                        </div>
                        <div className="form-group">
                           <button type="submit" className="btn btn-info">Login</button>
                        </div>
                        <div className="form-group">
                            <span>Forget Password?</span>
                        </div>
                    </form>
                </div>
         */}


    <div class="signup-form">
       <form >
		<h4>Register</h4>
		 <div class="form-group">
         <Input typeInput="text" placeholder="Your Fist Name"  label="" name="fistName" id="fistName" InputValue={this.props.registerCredentials.firstName}  inputValid={this.props.errors.fistName.isValid} changeInput={(event)=> {this.props.onHandleChange(event)}}  errorMessage={this.props.errors.firstName.message }/>
	    </div>
        <div class="form-group">
             <Input typeInput="text" placeholder="Your Last Name"  label="" name="lastName" id="lastName" InputValue={this.props.registerCredentials.lastName} inputValid={this.props.errors.lastName.isValid}  changeInput={(event)=> {this.props.onHandleChange(event)}} errorMessage={this.props.errors.lastName.message } />
        </div>
        <div class="form-group">
       
            <Input typeInput="email" placeholder="Your Email"  label="" name="username" id="email" InputValue={this.props.registerCredentials.username}  inputValid={this.props.errors.username.isValid}   changeInput={(event)=> {this.props.onHandleChange(event)}}  errorMessage={this.props.errors.username.message }/>
            {/* <Input typeInput="email" placeholder="Your Email"   inputValue={this.props.credentials.username}  changeInput={(event) => {this.props.onHandleChange(event) }}  label="" name="username" id="email"     inputValid={this.props.errors.username.isValid} errorMessage={this.props.errors.username.message }/> */}
        </div>
		<div class="form-group">
           <Input typeInput="password" placeholder="Your Password"  label="" name="password" id="password" InputValue={this.props.registerCredentials.password}  inputValid={this.props.errors.password.isValid}  changeInput={(event)=> {this.props.onHandleChange(event)}} errorMessage={this.props.errors.password.message }/>
        </div>
		<div class="form-group">
            <Input typeInput="password" placeholder="Confirm Your Password"  label="" name="confirmPassword" id="confirmPassword"/>
        </div>        
        <div class="form-group">
			<label class="form-check-label"><Input typeInput="checkbox" name="terms" id="terms" /> I accept the <span href="#">Terms of Use</span> &amp; <span href="#">Privacy Policy</span></label>
		</div>
		<div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
        </div>
    </form>
	
</div>
        
        
        </>)



    }
}

const mapStateToProps = (state) =>{
  return {

    registerCredentials : state.loginR.registerCredentials,
    errors              : state.loginR.errors,
  }


}
const mapDispatchToProps = (dispatch) =>{
 return {
    onHandleChange : (event) => dispatch(onChange(event)) ,

 }


}




export default  connect(mapStateToProps,mapDispatchToProps)(Register) ;