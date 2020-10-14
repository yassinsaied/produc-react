import React from "react"


const checkoutCart = (props) => {

  const totalArray = [];
  const listProducts = props.listProducts.map(product => {
       totalArray.push(parseFloat(product.amountProduct))   
       return(
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">{product.nameProduct}</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">${product.amountProduct}</span>
         </li>
       )
  })
  
  const total = totalArray.reduce((acc, curr) => { return acc + curr; }, 0)
  
  return(
            <>
                  <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                      <span class="text-muted">Your cart</span>
          <span class="badge badge-warning badge-pill">{listProducts.length}</span>
                    </h4>
                    <ul class="list-group mb-3">
                    
                        {listProducts}
                        
                      <li class="list-group-item d-flex justify-content-between bg-light text-success">
                        <span>Total (USD)</span>
                          <strong>${total}</strong>
                      </li>
                    </ul>
                  </div>

    </>
  )
}



export default checkoutCart;