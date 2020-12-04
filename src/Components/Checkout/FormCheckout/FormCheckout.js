import React, { Component } from 'react';
import axios from "axios"
import SelectListe from "../../../Ui/SelectListe/SelectListe"
import Input from "../../../Ui/Input/Input"
import RadioInput from "../../../Ui/Input/Input"
import "./FormCheckout.css"

const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
 // eslint-disable-next-line
const zipCodRegex = RegExp(/^\d{4}$/);

class formCheckout extends Component{
    
     
    
    
   state = {
       order: {
            firstName: "",
            lastName:"",
            userName:"",
            address: "",
            state: "",
            city: "",
            zipCode: "",
            paymentMethod : ""
       },
 
       error: {
            firstName: {isValid :true , message:"" , touched: false },
            lastName: {isValid :true , message:"" ,  touched: false},
            userName: {isValid :true , message:"" ,  touched: false},
            address:  {isValid: true, message: "", touched: false },
            state:    {isValid: true, message: "", touched: false },
            city:     {isValid: true, message: "", touched: false },
            zipCode: { isValid: true, message: "", touched: false },
            paymentMethod : {isValid: true, message: "", touched: false }
       }, 

       validForm: true,
       listeOfstates: [],
       listeOfCitys: [],
       allLoction : {}
    }
    
    
    
    componentDidMount() {
      
        axios.get("https://raw.githubusercontent.com/marwein/tunisia/master/tunisia.json")
            .then(request => {
                const gouvernerats = request.data
                const listeOfstates = [...this.state.listeOfstates];
                Object.entries(gouvernerats).forEach(gouvernerat => {
                            listeOfstates.push(gouvernerat[0])
                });
                
                this.setState({
                    ...this.state,
                    listeOfstates: listeOfstates,
                    allLoction: gouvernerats
                });
                                
            }).catch(error => {
                
                    console.log(error.message)
            })
             
    }


    
    
   
    
     
    onHandleChange = (event) => {
        let  listeOfCitys = [...this.state.listeOfCitys];
        const allLoction = { ...this.state.allLoction };
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
           case 'state':
                   error.state.touched = true
               if (value === "choose state") {
                   error.state.message = " the state ise required"
                   error.state.isValid = false
                       
               } else {
                   listeOfCitys = []
                   Object.entries(allLoction).forEach(loc => {
                  
                       if (loc[0] === value) {
                           loc[1].map(option => listeOfCitys.push(option.localite))
           
                       }
                   });
                   error.state.message = "";
                   error.state.isValid = true;
               }          
               break;
           case "city":
               error.city.touched = true;
               if (value === "choose city") {
                   error.city.message = "city is required";
                   error.city.isValid = false;
                   
               } else {
                    error.city.message = "";
                    error.city.isValid = true; 
               }
               
               
               break;
           
            case "zipCode":
               error.zipCode.touched = true;
               if (value.trim() === "" || !zipCodRegex.test(value)) {
                   error.zipCode.message = "Zip Code invalid";
                   error.zipCode.isValid = false;
                   
               } else {
                    error.zipCode.message = "";
                    error.zipCode.isValid = true; 
               }
               
               
               break;
           case "paymentMethod":
                error.zipCode.touched = true;
               
               
               break;
                       
            default:
                break;
       }
       
        this.setState({
            ...this.state,
            order: { [name]: value},
            listeOfCitys: listeOfCitys,
           
            error,
            
          
          
           
            
        });
        console.log(this.state.order);
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

   
 




    render() {
  
        return ( <>

            <div className="col-md-8 order-md-1">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Confirm your order</span>
                </h4>             
        
                <form className="needs-validation" onSubmit={this.onHandelSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">

                            <Input label="First name" name="firstName" id="firstName" type="text" placeholder="" inputValue={this.state.order.firstName} changeInput={(event) => { this.onHandleChange(event) }} inputValid={this.state.error.firstName.isValid} errorMessage={this.state.error.firstName.message} />
                            
                        </div>
                        <div className="col-md-6 mb-3">

                            <Input label="Last name" name="lastName" id="lastName" typeInput="text" placeholder="" inputValue={this.state.order.lastName} changeInput={(event) => { this.onHandleChange(event) }} inputValid={this.state.error.lastName.isValid} errorMessage={this.state.error.lastName.message} />
                            
                        </div>
                    </div>

                    <div className="mb-3">

                         <Input label="Username" name="userName" id="userName" typeInput="email" placeholder="Username" inputValue={this.state.order.userName} changeInput={(event) => { this.onHandleChange(event) }} inputValid={this.state.error.userName.isValid} errorMessage={this.state.error.userName.message}/>
               
                    </div>
                    
                    <div className="mb-2">
                        
                        <Input label="Address" name="address" id="address" typeInput="text" placeholder="" inputValue={this.state.order.address} changeInput={(event) => { this.onHandleChange(event) }} inputValid={this.state.error.address.isValid} errorMessage={this.state.error.address.message} />
               
                    </div>

                    <div className="row">
                        <SelectListe label="state" id="state" name="state" changeSelect={(event) => { this.onHandleChange(event) }} valueSelect={this.state.order.state} listeOfOptions={this.state.listeOfstates} errorMessage={this.state.error.state.message} inputValid={this.state.error.state.isValid}/>
                        <SelectListe label="City" id="city" name="city" changeSelect={(event) => { this.onHandleChange(event) }} valueSelect={this.state.order.city} listeOfOptions={this.state.listeOfCitys} parametrSelect ={this.state.order.state} errorMessage={this.state.error.city.message} inputValid={this.state.error.city.isValid} />
                        <div className="col-md-2 mb-3">
                        <Input label="Zip code" name="zipCode" id="zipCode" typeInput="text" placeholder="" inputValue={this.state.order.zipCode} changeInput={(event) => { this.onHandleChange(event) }} inputValid={this.state.error.zipCode.isValid} errorMessage={this.state.error.zipCode.message}/>
                        </div>
                    </div>

                    <hr className="mb-4"/>

                        <h4 className="mb-3">Payment</h4>
                        <div className="my-3 rowRadio">
                           <RadioInput label="Credit card"  typeInput="radio" name="paymentMethod" id="credit"  inputValue="CreditCard"  changeInput={(event) => { this.onHandleChange(event) }} />
                       </div>

                        <div className="my-3 rowRadio">
                           <RadioInput label="PayPal"  typeInput="radio" name="paymentMethod" id="paypal"  inputValue="paypal"  changeInput={(event) => { this.onHandleChange(event) }} />
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
                        <button  type="submit" className="btn btn-primary btn-lg btn-block"  >Continue to checkout</button>
                    
                </form>
            </div>

        </> )
    
        };
}
 
export default formCheckout;
