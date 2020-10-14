import React from 'react';

const formCheckout = () => {
    
    return ( <>

        <div class="col-md-8 order-md-1">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Confirm your order</span>
            </h4>             
            
            <form class="needs-validation">
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value=""/>
                        <span class="invalid-feedback">Valid first name is required.</span>
                     
                        
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" value=""/>
                        <span class="invalid-feedback">Valid last name is required.</span>
                    </div>

              </div>

              <div class="mb-3">
                    <label for="username">Username</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                        </div>
                        <input type="text" class="form-control" id="username" placeholder="Username"/>
                        <div class="invalid-feedback">
                        Your username is required.
                        </div>
                    </div>
              </div>
                
              <div class="mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" />
                    <span class="invalid-feedback">   Please enter your shipping address.  </span>
                
               </div>

                <div class="row">
                    <div class="col-md-5 mb-3">
                        <label for="country">Governorates</label>
                        <select class="custom-select d-block w-100" id="country" >
                        <option value="">Choose...</option>
                        <option>United States</option>
                        </select>
                        <span class="invalid-feedback">  Please select a valid country.</span>
             
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="state">Town</label>
                        <select class="custom-select d-block w-100" id="state" >
                        <option value="">Choose...</option>
                        <option>California</option>
                        </select>
                        <span class="invalid-feedback">  Please provide a valid state. </span>
                   
                    </div>

                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" />
                        <span class="invalid-feedback">   Zip code required.</span>
           
                    </div>

                </div>

                <hr class="mb-4"/>

                    <h4 class="mb-3">Payment</h4>
                    <div class="d-block my-3">

                        <div class="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" />
                            <label class="custom-control-label" for="credit">Credit card</label>
                        </div>
                    
                        <div class="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" />
                            <label class="custom-control-label" for="paypal">PayPal</label>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cc-name">Name on card</label>
                            <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                            <small class="text-muted">Full name as displayed on card</small>
                            <span class="invalid-feedback">Name on card is required  </span>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="cc-number">Credit card number</label>
                            <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                            <span class="invalid-feedback">Credit card number is required</span>
          
                       </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="cc-expiration">Expiration</label>
                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                            <span class="invalid-feedback">  Expiration date required</span>
                        </div> 
                       <div class="col-md-3 mb-3">
                            <label for="cc-cvv">CVV</label>
                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                            <span class="invalid-feedback">   Security code required</span>
                       </div>
                    </div>
                    <hr class="mb-4"/>
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                  
            </form>
        </div>








    </> );
}
 
export default formCheckout;
