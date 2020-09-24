import React ,{useEffect, useState} from 'react'
import CardProduct from '../CardProduct/CardProduct'



const ListProducts = ({allProducts}) => {

    const [listProducts , setListProducts] = useState({
   
      fruits : [],
      vegetables : []



    });
    //console.log(props)
    useEffect(() => {
      setListProducts(allProducts)
      }, []);

      Object.keys(listProducts).forEach(keyProducts => {
        // console.log(keyProduct);
            listProducts[keyProducts].map( product => {
             console.log(product)
            
         
        
       })
        }) 
  

    

  
    return ( 
    <>
       <h1> list Product</h1>

       {/* <CardProduct nameProduct={product.name}   unite={product.unite}  price={product.price} pic={product.pic}  type={keyProducts} /> */}

           
</>
     );
}
 
export default ListProducts;
