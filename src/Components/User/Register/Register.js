import React, { Component } from "react"
import "./Register.css"
import Input from "../../../Ui/Input/Input"
import { connect } from "react-redux";

class Register extends Component {



    render() {

        return (<>
        
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
        
        
        
        </>)



    }
}


export default Register;