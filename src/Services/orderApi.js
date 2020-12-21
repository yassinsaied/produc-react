import axios from "axios"


 const postOrder = async(order) => {


    return await axios.post("http://127.0.0.1:8000/api/orders", order).then(response => {
        console.log(response)
        return response;
        
    })

}

export default {
postOrder

}