import React , {useState} from 'react';
import "./Login.css"
import Input from "../../../Ui/Input/Input"


const Login = () => {

const [credentials , setCredentials ] = useState({
    username: "",
    password : ""
})
    
    
const [errors, setErrors] = useState({
   
        username: { isValid: true, message: "", touched: false },
        password : {isValid :true , message:"" , touched: false },
}) 
    
const [formValid , setFormValid] =useState(true)    
    
    

    const onHhandleChange = (event) => {

        const name = event.currentTarget.name;
        const  value = event.currentTarget.value;
        const errorsForm = { ...errors };
      
        switch (name) {
            case "username":
             
                errorsForm.username.touched = true;
                if (value.length < 3 || value.trim() === "") {
                    errorsForm.username.message = "username must be 3 charcter long"
                    errorsForm.username.isValid = false
                } else {
                    errorsForm.username.message = ""
                    errorsForm.username.isValid = true

                }
                   console.log( errorsForm)
                break;
            case "password":
                errorsForm.username.touched = true;
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

          console.log( errorsForm)
        setCredentials({ ...credentials, [name]: value });
        setErrors({...errors ,errorsForm})

    }
    

    const onHandelSubmit = (event) =>{
        
         event.preventDefault();
       // const listIputError = [];
        let  formValid = true;
        const errorsForm = errors
        Object.entries(errors).forEach((error) => {
       
            if ((!error[1].isValid && error[1].touched )|| (error[1].isValid && !error[1].touched)) {
                formValid = false  
                errors[error[0]].message = error[0] + " is Required ";
                errors[error[0]].isValid = false;

           }
             
            }
        );      
    

    }




    return (<>
      <div class="login-container">
                    <h4>Login </h4>
                    <form className="mx-auto formLogin"  onSubmit={onHandelSubmit}>
                      <div className="form-group">
                    
                      <Input typeInput="email" placeholder="Your Email"   inputValue={credentials.username}  changeInput={(event) => {onHhandleChange(event) }}  label="Email" name="username" id="username"     inputValid={errors.username.isValid} errorMessage={errors.username.message }/>
                           
                        </div>
                        <div className="form-group">
                    <Input typeInput="password" placeholder="Your Password" inputValue={credentials.password} changeInput={(event) => {onHhandleChange(event) }}  label="Password" name="password" id="password"  inputValid={errors.password.isValid} errorMessage={errors.password.message }/>
                        </div>
                        <div className="form-group">
                           <button type="button" class="btn btn-info">Login</button>
                        </div>
                        <div className="form-group">
                            <span>Forget Password?</span>
                        </div>
                    </form>
                </div>
    </>)

}

export default Login;