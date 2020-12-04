import React from 'react';


const RadioInput = (props) => {
    

    return (
       
       
          <div className="custom-control custom-radio">
              <input id={props.id} name={props.name} type={props.typeInput} value={props.value} className="custom-control-input btn-warring" onChange={this.onHandleChange}/>
              <label className="custom-control-label" htmlFor={props.name}> {props.label}</label>
           </div> 
        
      
    )
}


export default RadioInput;