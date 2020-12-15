import React, { Component } from 'react';
import { connect } from "react-redux";
import {onSubmit, onChange} from "../../../Store/actions/actionLoginUser"
import SelectListe from "../../../Ui/SelectListe/SelectListe"
import Input from "../../../Ui/Input/Input"
import RadioInput from "../../../Ui/Input/Input"
import "./FormCheckout.css"

class formCheckout extends Component{
    
    
    
    
    
 

    
    
   
    
     
   
    
  

        // if (formValid) {
            
        //     this.props.listProducts.map(product => {
        //         let newProduct = Object.assign({}, product, {
        //             product: product.refProduct,
        //             Qte: product.countProduct,
        //             amountProduct: product.amountProduct
        //         })
        //         this.props.order.orderProduct.concat(newProduct)

        //     })

        //       console.log(this.props.order.orderProduct)


        // }
  

    render() {
  
        return ( <>

            <div className="col-md-8 order-md-1">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Confirm your order</span>
                </h4>             
        
                <form className="needs-validation" onSubmit={(event)=>{this.props.onHandelSubmit(event ,"orderCredentials")}}>
                    <div className="row">
                        <div className="col-md-6 mb-3">

                            <Input label="First name" name="firstNameOrder" id="firstNameOrder" type="text" placeholder="" inputValue={this.props.orderCredentials.firstNameOrder} changeInput={(event) => { this.props.onHandleChange(event , "orderCredentials") }} inputValid={this.props.errors.firstNameOrder.isValid} errorMessage={this.props.errors.firstNameOrder.message} />
                            
                        </div>
                        <div className="col-md-6 mb-3">

                            <Input label="Last name" name="lastNameOrder" id="lastNameOrder" typeInput="text" placeholder="" inputValue={this.props.orderCredentials.lastNameOrder} changeInput={(event) => { this.props.onHandleChange(event , "orderCredentials") }} inputValid={this.props.errors.lastNameOrder.isValid} errorMessage={this.props.errors.lastNameOrder.message} />
                            
                        </div>
                    </div>

                    <div className="mb-3">

                         <Input label="Username" name="usernameOrder" id="usernameOrder" typeInput="email" placeholder="Username" inputValue={this.props.orderCredentials.usernameOrder} changeInput={(event) => { this.props.onHandleChange(event , "orderCredentials") }} inputValid={this.props.errors.usernameOrder.isValid} errorMessage={this.props.errors.usernameOrder.message}/>
               
                    </div>
                    
                    <div className="mb-2">
                        
                        <Input label="Address" name="adressOrder" id="adressOrder" typeInput="text" placeholder="" inputValue={this.props.orderCredentials.adressOrder} changeInput={(event) => { this.props.onHandleChange(event , "orderCredentials") }} inputValid={this.props.errors.adressOrder.isValid} errorMessage={this.props.errors.adressOrder.message} />
               
                    </div>

                    <div className="row">
                        <SelectListe label="state" id="stateOrder" name="stateOrder" changeSelect={(event) => {this.props.onHandleChange(event , "orderCredentials") }} valueSelect={this.props.orderCredentials.stateOrder} listeOfOptions={this.props.listeOfStates} errorMessage={this.props.errors.stateOrder.message} inputValid={this.props.errors.stateOrder.isValid}/>
                        <SelectListe label="City" id="cityOrder" name="cityOrder" changeSelect={(event) => {this.props.onHandleChange(event , "orderCredentials" ) }}   valueSelect={this.props.orderCredentials.cityOrder} listeOfOptions={this.props.listeOfCitys}   errorMessage={this.props.errors.cityOrder.message} inputValid={this.props.errors.cityOrder.isValid} />
                        <div className="col-md-2 mb-3">
                        <Input label="Zip code" name="zipCode" id="zipCode" typeInput="text" placeholder="" inputValue={this.props.orderCredentials.zipCode} changeInput={(event) => { this.props.onHandleChange(event, "orderCredentials") }} inputValid={this.props.errors.zipCode.isValid} errorMessage={this.props.errors.zipCode.message}/>
                        </div>
                    </div>

                    <hr className="mb-4"/>

                        <h4 className="mb-3">Payment</h4>
                        <div className="my-3 rowRadio">
                           <RadioInput label="Credit card"  typeInput="radio" name="paymentMethodOrder" id="credit" inputValue="credit" changeInput={(event) => {this.props.onHandleChange(event , "orderCredentials")}} errorMessage={this.props.errors.paymentMethodOrder.message} inputValid={this.props.errors.paymentMethodOrder.isValid}  checkedInput={this.props.paymentMethodOrder === "credit"}/>
                       </div>

                        <div className="my-3 rowRadio">
                           <RadioInput label="PayPal"  typeInput="radio"   name="paymentMethodOrder" id="paypal"   inputValue="paypal"   changeInput={(event) => {this.props.onHandleChange(event , "orderCredentials")}} errorMessage={this.props.errors.paymentMethodOrder.message} inputValid={this.props.errors.paymentMethodOrder.isValid}  checkedInput={this.props.paymentMethodOrder === "paypal"} />
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


const mapStateToProps = (state) => {
    return {
        listProducts: state.cartR.listProducts,
        listeOfCitys : state.loginR.listeOfCitys,
        errors: state.loginR.errors,
        orderCredentials: state.loginR.orderCredentials,
       
  
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        
       onHandleChange : (event , cridentialsType ) => dispatch(onChange(event , cridentialsType)) ,
       onHandelSubmit : (event , cridentialsType) => dispatch(onSubmit(event , cridentialsType ))  

    }
}


 
export default connect(mapStateToProps ,mapDispatchToProps )(formCheckout);
