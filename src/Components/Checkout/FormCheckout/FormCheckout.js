import React, { Component } from 'react';
import "./FormCheckout.css"

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class formCheckout extends Component{
    
   
   state = {
       order: {
            firstName: "",
            lastName:"",
            userName:"",
            address:"",
       },
 
       error: {
            firstName: {isValid :true , message:"" , touched: false },
            lastName: {isValid :true , message:"" ,  touched: false},
            userName: {isValid :true , message:"" ,  touched: false},
            address: {isValid :true , message:"" ,   touched: false},
       }, 

      validForm : true
    
  
   }
     
    onHandleChange = (event) => {
        
       const { name, value } = event.target;
       const error = this.state.error;
       switch (name) {
           case "firstName":
                 error.firstName.touched = true
                 if (value.length < 3 || value.trim() === "") {
                     error.firstName.message = "First Name must be 3 characters long!";
                     error.firstName.isValid = false;
                     
                 } else {
                     error.firstName.message = "";
                     error.firstName.isValid = true;
                    
                 }
                
                break;
            case "lastName":
                error.lastName.touched = true;
                if (value.length < 3 || value.trim() === "") {
                     error.lastName.message = "LastName Must be 3 characters long!";
                     error.lastName.isValid = false;
                    
                    
                } else {
                    error.lastName.message = "";
                    error.lastName.isValid = true;
                   
                }

                break;
            case "address":
                error.address.touched = true;
                if (value.trim() === "") {
                    error.address.message = "Please enter your shipping address. "
                    error.address.isValid = false;
                  
                    } else {
                    error.address.message = "";
                    error.address.isValid = true;
                }

                break;
           case "userName":
                error.userName.touched = true;
                if (!validEmailRegex.test(value) || value.trim() === "") {
                     error.userName.message = "email invalid"
                     error.userName.isValid = false
                } else {
                    error.userName.message = "";
                    error.userName.isValid = true
                }
                break;
        
            default:
                break;
        }

        this.setState({
           ...this.state,
            error, order: { [name]: value }
            
        })
    }
    
    onHandelSubmit = (event) => {
        event.preventDefault();
       // const listIputError = [];
        let  formValid = true;
        const errors = this.state.error
        Object.entries(errors).forEach((error) => {
       
            if ((!error[1].isValid && error[1].touched )|| (error[1].isValid && !error[1].touched)) {
                formValid = false  
                errors[error[0]].message = error[0] + " is Required ";
                errors[error[0]].isValid = false;

           }
             
            }
        );      
        this.setState({
            ...this.state,
            error : errors ,
            validForm: formValid
        })
    }

   
 




render(){
   
    return ( <>

        <div className="col-md-8 order-md-1">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Confirm your order</span>
            </h4>             
            
            <form className="needs-validation" onSubmit={this.onHandelSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className={"form-control " + (!this.state.error.firstName.isValid && " is-invalid ")} id="firstName" name="firstName" placeholder=""  onChange={this.onHandleChange}/>
                        <span className="invalid-feedback">{this.state.error.firstName.message}</span>
                     
                        
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className={"form-control " + (!this.state.error.lastName.isValid && " is-invalid ")} id="lastName" name="lastName" placeholder=""   onChange={this.onHandleChange}/>
                        <span className="invalid-feedback">{this.state.error.lastName.message}</span>
                    </div>

              </div>

              <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className={"form-control " + (!this.state.error.userName.isValid && " is-invalid ")} id="userName" placeholder="userName"  name="userName"  onChange={this.onHandleChange}/>
                        <div className="invalid-feedback">
                       {this.state.error.userName.message}
                        </div>
                    </div>
              </div>
                
              <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text"  className={"form-control " + (!this.state.error.address.isValid && "is-invalid ")} id="address" name="address" placeholder="1234 Main St" onChange={this.onHandleChange}/>
                    <span className="invalid-feedback">   {this.state.error.address.message}  </span>
                
               </div>

                <div className="row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="country">Governorates</label>
                        <select className="custom-select d-block w-100" id="country" >
                        <option value="">Choose...</option>
                        <option>United states</option>
                        </select>
                        <span className="invalid-feedback">  Please select a valid country.</span>
             
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="state">Town</label>
                        <select className="custom-select d-block w-100" id="state" >
                        <option value="">Choose...</option>
                        <option>California</option>
                        </select>
                        <span className="invalid-feedback">  Please provide a valid state. </span>
                   
                    </div>

                    <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" />
                        <span className="invalid-feedback">   Zip code required.</span>
           
                    </div>

                </div>

                <hr className="mb-4"/>

                    <h4 className="mb-3">Payment</h4>
                    <div className="d-block my-3">

                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="credit">Credit card</label>
                        </div>
                    
                        <div className="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="cc-name">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" />
                            <small className="text-muted">Full name as displayed on card</small>
                            <span className="invalid-feedback">Name on card is required  </span>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="cc-number">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder=""/>
                            <span className="invalid-feedback">Credit card number is required</span>
          
                       </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" />
                            <span className="invalid-feedback">  Expiration date required</span>
                        </div> 
                       <div className="col-md-3 mb-3">
                            <label htmlFor="cc-cvv">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" />
                            <span className="invalid-feedback">   Security code required</span>
                       </div>
                    </div>
                    <hr className="mb-4"/>
                    <button className="btn btn-primary btn-lg btn-block"  onClick={this.validation}>Continue to checkout</button>
                  
            </form>
        </div>

    </> )
    
        };
}
 
export default formCheckout;
