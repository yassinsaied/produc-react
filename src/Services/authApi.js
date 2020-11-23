import axios from "axios";
import JwdDecode from "jwt-decode"


function logout()
{
 
    window.localStorage.removeItem('authToken');
    delete axios.defaults.headers["Authorization"];
}


const authenticate = async(credentials) => {
 
return await  axios.post("http://127.0.0.1:8000/api/login_check", credentials).then(response => {
       
        let token = response.data.token
         window.localStorage.setItem("authToken", token);
         axios.defaults.headers["Authorization"] = "Bearer " + token;
      return response
    
       
     })
}


const getUserByUserName = async(token) => {
const {username}= JwdDecode(token) 
return await  axios.get("http://127.0.0.1:8000/api/users?email="+username).then(user => {
         
      return user
           
     })
}



function setup()
{
    const token = window.localStorage.getItem("authToken");
    if (token) {
        
        const { exp: experation } = JwdDecode(token)

        if (experation * 1000 > new Date().getTime()) {
            axios.defaults.headers["Authorization"] = "Bearer " + token; 
        }
    }
}

export default {
    authenticate,
    logout,
    setup,
    getUserByUserName
}