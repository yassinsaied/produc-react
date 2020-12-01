import axios from "axios"

export const fastSearchProducts =  (searchText ,currentPage , itemPerpage) => {

   return  axios.get("http://127.0.0.1:8000/api/products?name="+searchText+"&page="+currentPage+"&itemsPerPage="+itemPerpage).then(response=>{
       
        return response.data

    }).catch(error=>{

        console.log(error.message)
    })

}