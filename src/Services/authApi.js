import axios from "axios";
import JwdDecode from "jwt-decode"


function logout()
{
 
    window.localStorage.removeItem('authToken');
    delete axios.defaults.headers["Authorization"];
}


function authenticate(credentials)
{
    return axios.post("http://127.0.0.1:8000/api/login_check", credentials).then(response => {
        console.log(response);
        return response.data.token
        
    }).then(token => {
       
            window.localStorage.setItem("authToken", token);
            axios.defaults.headers["Authorization"] = "Bearer " + token;
        
        })
}


function setup()
{
    const token = window.localStorage.getItem("authToken");
    if(token){
        const { exp: experation } = JwdDecode(token)
        if (experation * 1000 > new Date().getTime()) {
            axios.defaults.headers["Authorization"] = "Bearer " + token; 
        }
    }
}

export default {
    authenticate,
    logout,
    setup
}