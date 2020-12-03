import axios from "axios"

export const  fetchAllProducts =  (typeProduct , currentPage , itemsPerPage) => {

   let linkOfApi = "";
   if (typeProduct === undefined) { 

    linkOfApi = "http://127.0.0.1:8000/api/products?promo[gt]=0&page="+ currentPage +"&itemsPerPage="+itemsPerPage ;
  

   } else {

     linkOfApi = "http://127.0.0.1:8000/api/categories/" + typeProduct + "/products?page="+ currentPage +"&itemsPerPage="+itemsPerPage;
    
   }

   return  axios.get(linkOfApi)
      .then(response=>{
       
         return response.data
 
      }).catch(error => {

        console.log(error.message)

      });

   

}