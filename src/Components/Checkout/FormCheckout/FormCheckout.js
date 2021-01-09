import React, { Component } from 'react';
import { connect } from "react-redux";
import { onSubmit, onChange } from "../../../Store/actions/actionLoginUser"
import {onAddOrder} from "../../../Store/actions/actionOrder"
import SelectListe from "../../../Ui/SelectListe/SelectListe"
import Input from "../../../Ui/Input/Input"
import RadioInput from "../../../Ui/Input/Input"
import "./FormCheckout.css"

class formCheckout extends Component{
    
    componentDidMount() {
       
       
   } 
    
  componentDidUpdate(prevProps) {
 
    
      if (this.props.validForm && this.props.validForm !== prevProps.validForm) {
           this.props.onHandelOrder(
              this.props.orderCredentials.stateOrder,
              this.props.orderCredentials.cityOrder,
              this.props.orderCredentials.adressOrder,
              this.props.user.id,
              this.props.listProducts,
              
          );
   
      }
    
 
  }
    
 
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
                           <RadioInput label="Credit card"  typeInput="radio" name="paymentMethodOrder" id="credit" inputValue="credit" changeInput={(event) => {this.props.onHandleChange(event , "orderCredentials")}} errorMessage={this.props.errors.paymentMethodOrder.message} inputValid={this.props.errors.paymentMethodOrder.isValid}  checkedInput={this.props.orderCredentials.paymentMethodOrder === "credit"}/>
                       </div>

                        <div className="my-3 rowRadio">
                           <RadioInput label="PayPal"  typeInput="radio"   name="paymentMethodOrder" id="paypal"   inputValue="paypal"   changeInput={(event) => {this.props.onHandleChange(event , "orderCredentials")}} errorMessage={this.props.errors.paymentMethodOrder.message} inputValid={this.props.errors.paymentMethodOrder.isValid}  checkedInput={this.props.orderCredentials.paymentMethodOrder === "paypal"} />
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                
                            <Input label="Credit card number" name="creditCardNumber" id="CreditCardNumber" typeInput="text" placeholder="" inputValue={this.props.orderCredentials.creditCardNumber} changeInput={(event) => { this.props.onHandleChange(event , "orderCredentials") }} inputValid={this.props.errors.creditCardNumber.isValid} errorMessage={this.props.errors.creditCardNumber.message} />
                                                
                            </div>
                        <div className="col-md-3 mb-3">
                            
                            <Input label="CVV" name="cvv" id="cvv" typeInput="text" placeholder="" inputValue={this.props.orderCredentials.cvv} changeInput={(event) => { this.props.onHandleChange(event , "orderCredentials") }} inputValid={this.props.errors.cvv.isValid} errorMessage={this.props.errors.cvv.message} />
                                  
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
        listeOfCitys: state.formR.listeOfCitys,
        validForm: state.formR.validForm,
        formType: state.formR.formType,
        errors: state.formR.errors,
        orderCredentials: state.formR.orderCredentials,
        user: state.loginR.user,
        loding: state.loginR.loding,
        listProducts: state.cartR.listProducts,
        allLocation:   state.formR.allLocation,
        listeOfStates: state.formR.listeOfStates
        
        
         
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        
       onHandleChange : (event , cridentialsType ) => dispatch(onChange(event , cridentialsType)) ,
       onHandelSubmit: (event, cridentialsType) => dispatch(onSubmit(event, cridentialsType)),
       onHandelOrder : (state , city , address , user , listProducts) => dispatch(onAddOrder(state , city , address , user , listProducts))

    }
}


 
export default connect(mapStateToProps ,mapDispatchToProps )(formCheckout);
