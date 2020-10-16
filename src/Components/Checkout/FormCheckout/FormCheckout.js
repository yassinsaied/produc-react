import React, { Component}from 'react';

class formCheckout extends Component{
    
   
   State = {
       order: {
            firstName: "",
            lastName:"",
            userName:"",
            adress:"",
       },
 
       error: {
            firstName: {isValid :false , message:""},
            lastName: {isValid :false , message:""},
            userName: {isValid :false , message:""},
            adress: {isValid :false , message:""},
       }, 

       validEmailRegex: RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),
       validForm : false
   }
    
 
 

    onHandleChange = (event) => {
        const {name, value } = event.target
        const error = this.State.error;
        console.log(event.target.value)
        switch (name) {
            case "firstName":
                value.length < 3 || value === ""  ?  error.firstName.message ="First Name must be 3 characters long!"  : error.firstName.message ="" ;  error.firstName.isValid= true ;
                break;
            case "lastName":
                value.length < 3 || value === "" ?  error.firstName.message = "LastName Must be 3 characters long!" : error.firstName.message ="" ; error.lastName.isValid = true
                break;
            case "adress":
               value === "" ? error.adress.message = "adress is required" :  error.adress.message="" ; error.adress.isValid=true
                break;
            case "userName":
              !this.State.validEmailRegex.test(value) || value ==="" ? error.userName.message =  "email invalid" :  error.userName.message = "" ; error.userName.isValid=true
                break;
        
            default:
                break;
        }
        
        this.setState({error , order :{ [name] : value }})
        console.log(this.State.error)
      
     

    }
    
    // validation = (value , rules) => {
        
    //     if (rules.required) {
          

    //   }

    // }




render(){
   
    return ( <>

        <div className="col-md-8 order-md-1">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Confirm your order</span>
            </h4>             
            
            <form className="needs-validation">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className={"form-control " + (!this.State.error.firstName.isValid && "is-invalid")} id="firstName" name="firstName" placeholder=""  onChange={this.onHandleChange}/>
                        <span className="invalid-feedback">Valid first name is required.</span>
                     
                        
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className={"form-control " + (!this.State.error.lastName.isValid && "is-invalid")} id="lastName" name="lastName" placeholder=""   onChange={this.onHandleChange}/>
                        <span className="invalid-feedback">Valid last name is required.</span>
                    </div>

              </div>

              <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className={"form-control " + (!this.State.error.userName.isValid && "is-invalid")} id="userName" placeholder="userName"  name="userName"  onChange={this.onHandleChange}/>
                        <div className="invalid-feedback">
                        Your username is required.
                        </div>
                    </div>
              </div>
                
              <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text"  className={"form-control " + (!this.State.error.adress.isValid && "is-invalid")} id="address" name="address" placeholder="1234 Main St" onChange={this.onHandleChange}/>
                    <span className="invalid-feedback">   Please enter your shipping address.  </span>
                
               </div>

                <div className="row">
                    <div className="col-md-5 mb-3">
                        <label htmlFor="country">Governorates</label>
                        <select className="custom-select d-block w-100" id="country" >
                        <option value="">Choose...</option>
                        <option>United States</option>
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
                            <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                            <small className="text-muted">Full name as displayed on card</small>
                            <span className="invalid-feedback">Name on card is required  </span>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="cc-number">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                            <span className="invalid-feedback">Credit card number is required</span>
          
                       </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                            <span className="invalid-feedback">  Expiration date required</span>
                        </div> 
                       <div className="col-md-3 mb-3">
                            <label htmlFor="cc-cvv">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                            <span className="invalid-feedback">   Security code required</span>
                       </div>
                    </div>
                    <hr className="mb-4"/>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                  
            </form>
        </div>

    </> )
    
        };
}
 
export default formCheckout;
