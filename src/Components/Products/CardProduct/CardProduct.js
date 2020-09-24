import React from 'react';


const CardProduct = ({nameProduct  , unite , price , pic , type}) => {
    return ( 
<div className="col-sm-3">
    {/* <div className="card border-primary mb-4" >
    <div className="card-header">Header</div>
    <div className="card-body">
        <h4 className="card-title">Secondary card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div> */}


    <div className="card mb-2">
        <img className="card-img" src={process.env.PUBLIC_URL + '/assets/img/'+type+'/'+pic} alt="Vans"/>
        <div className="card-img-overlay d-flex justify-content-end">
          <span  className="card-link text-danger like">
            <i className="fa fa-heart"></i>
          </span>
        </div>
        <div className="card-body">
          <h4 className="card-title">{nameProduct}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{unite}</h6>
          <p className="card-text">
            The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool.             </p>
        
          <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-info"><h5 className="mt-4">{price}</h5></div>
             <span className="btn btn-info mt-3"><i className="fa fa-shopping-cart"></i> Add to Cart</span>
          </div>
        </div>
      </div>









    
</div>
     );
}
 
export default CardProduct;