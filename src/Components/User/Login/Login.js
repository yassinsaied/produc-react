import React, { useState } from 'react';
import "./Login.css";
import Input from "../../../Ui/Input/Input";
import AuthApi from "../../../Services/authApi"





const Login = () => {
const validEmailRegex = RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const [credentials , setCredentials ] = useState({
    username: "",
    password : ""
})
 
const [errors, setErrors] = useState({
   
        username: { isValid: true, message: "", touched: false },
        password : {isValid :true , message:"" , touched: false },
}) 
    
const [formValid , setFormValid] =useState(true)    
    
    

    const onHhandleChange = ({ currentTarget }) => {

        const { name , value }= currentTarget;
        const errorsForm = { ...errors };
      
        switch (name) {
            case "username":
                 errorsForm.username.touched = true;
                if (!validEmailRegex.test(value) || value.trim() === "") {
                    errorsForm.username.message = "username must be 3 charcter long"
                    errorsForm.username.isValid = false
                } else {
                    errorsForm.username.message = ""
                    errorsForm.username.isValid = true
                }
       
                break;
            case "password":
                errorsForm.password.touched = true;
                if (value.length < 6 || value.trim() === "") {
                    errorsForm.password.message = "password must be 6 charcter long"
                    errorsForm.password.isValid = false
                } else {
                    errorsForm.password.message = ""
                    errorsForm.password.isValid = true
                }
               break;
    
            default:
                break;
        }

         
        setCredentials({ ...credentials, [name]: value });
        setErrors({...errors ,errorsForm})

    }

    const onHandelSubmit = async (event) =>{
       
        event.preventDefault();
        let     allFormValid = true;
        const errorsForm = errors
        Object.entries(errorsForm).forEach((error) => {
       
            if ((!error[1].isValid && error[1].touched )|| (error[1].isValid && !error[1].touched)) {
                allFormValid = false  
                errorsForm[error[0]].message = error[0] + " is Required ";
                errorsForm[error[0]].isValid = false;
            }
        });  

        setErrors({ ...errors, errorsForm });
        setFormValid(allFormValid);
        if (allFormValid) {
        
            try {
                await AuthApi.authenticate(credentials)
               
            } catch (error) {
                
                setErrors({
                    ...errors,
                    username: { message: error.response.data.message },
                    password: { message: error.response.data.message },
                });
              
           } 
        }

    }




    return (<>
      <div className="login-container">
                    <h4>Login </h4>
                    <form className="mx-auto formLogin"  onSubmit={onHandelSubmit}>
                      <div className="form-group">
                    
                      <Input typeInput="email" placeholder="Your Email"   inputValue={credentials.username}  changeInput={(event) => {onHhandleChange(event) }}  label="Email" name="username" id="email"     inputValid={errors.username.isValid} errorMessage={errors.username.message }/>
                           
                        </div>
                        <div className="form-group">
                    <Input typeInput="password" placeholder="Your Password" inputValue={credentials.password} changeInput={(event) => {onHhandleChange(event) }}  label="Password" name="password" id="password"  inputValid={errors.password.isValid} errorMessage={errors.password.message }/>
                        </div>
                        <div className="form-group">
                           <button type="submit" class="btn btn-info">Login</button>
                        </div>
                        <div className="form-group">
                            <span>Forget Password?</span>
                        </div>
                    </form>
                </div>
    </>)

}

export default Login;