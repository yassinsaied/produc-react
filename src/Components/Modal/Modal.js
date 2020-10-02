import React , {useState , useEffect} from "react";

const Modal = ({ product, price }) => {
 
  const [command, setCommand] = useState({

   price : price,
   amount : 1 ,
   count : 0

  });

  console.log(command.count)


  // useEffect(() => {
  //   handleAddQt()
  //   console.log(command.count)
  // }, [command.count]); // eslint-disable-line react-hooks/exhaustive-deps

const handleAddQt = () =>{


 const NewCommand = {
  price : command.price* command.count,
  amount : command.amount * command.count,
  count : command.count
 }

 console.log(NewCommand)
 setCommand({NewCommand})

}


  return (
    <div
      className="modal "
      id={`${product.ref}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-5">
                <img
                  className="card-img"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/" +
                    product.type +
                    "/" +
                    product.pic
                  }
                  alt={product.name}
                />
              </div>
              <div className="col-7">
                <p>Modal body text goes here.</p>
                <div className="price-wrap h6 mt-3">
                  $ {price}/ {product.unite}
                </div>


                <div className="btn-group mt-3" role="group" >
                  <button type="button" className="btn btn-info">-</button>
                  <span className="btn btn-light" >{command.count}</span>
                  <button type="button" className="btn btn-info" onClick={()=>{setCommand({count: command.count +1 })}}>+</button>
             </div>


              </div>

           </div>

          
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info">
              <i className="fa fa-shopping-cart cart"></i> Add To Cate
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
