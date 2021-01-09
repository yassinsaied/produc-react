import axios from "axios"


const registerUser = async(registerCredentials) => {

    return await axios.post("http://127.0.0.1:8000/api/users" , registerCredentials).then(response=>{
        return response
    })
}

export default{
  registerUser  
}