import axios from "axios"

function fastSearchProducts = async(searchText ,currentPage) => {

return await axios.get("http://127.0.0.1:8000/api/products?name="+searchText+"&page="+currentPage+"&itemsPerPage=10").then(response=>{

       return response

}).catch(error=>{

    console.log(error.message)
})



}