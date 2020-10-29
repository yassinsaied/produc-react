import React from "react"

const input = (props) => {
    
    return (
            <>
        
            <label htmlFor={props.name}>{props.label}</label>
             <div className="input-group">
                {props.typeInput === "email" && (
                    <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                    </div>  
                )} 
         <input type={props.typeInput} className={"form-control " + (!props.inputValid && " is-invalid ")} id={props.id} name={props.name} placeholder={props.placeholder} value={props.inputValue} onChange={props.changeInput}/>
         <span className="invalid-feedback">{props.errorMessage}</span>
        </div>
        
        </>
)



}

export default input;