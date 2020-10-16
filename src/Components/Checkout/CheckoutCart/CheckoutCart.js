import React from "react"


const checkoutCart = (props) => {

  const totalArray = [];
  const listProducts = props.listProducts.map(product => {
       totalArray.push(parseFloat(product.amountProduct))   
       return(
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">{product.nameProduct}</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">${product.amountProduct}</span>
         </li>
       )
  })
  
  const total = totalArray.reduce((acc, curr) => { return acc + curr; }, 0)
  
  return(
            <>
                  <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Your cart</span>
          <span className="badge badge-warning badge-pill">{listProducts.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                    
                        {listProducts}
                        
                      <li className="list-group-item d-flex justify-content-between bg-light text-success">
                        <span>Total (USD)</span>
                          <strong>${total}</strong>
                      </li>
                    </ul>
                  </div>

    </>
  )
}



export default checkoutCart;