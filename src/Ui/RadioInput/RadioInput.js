import React from 'react';


const radioInput = () => {
    

    return (
        
       
          <div className="custom-control custom-radio">
              <input id="credit" name="paymentMethod" type="radio" value="Credit card" className="custom-control-input" onChange={this.onHandleChange}/>
              <label className="custom-control-label" htmlFor="credit">Credit card</label>
           </div> 
        
      
    )
}

export default radioInput;