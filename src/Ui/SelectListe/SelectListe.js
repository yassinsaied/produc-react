import React from "react"

const selectListe = (props) => {

  return (
  
      <div className="col-md-5 mb-3">
            <label htmlFor={props.name}>{props.label}</label>
      <select className={"custom-select d-block w-100" + (!props.inputValid && " is-invalid ")} id={props.id} name={props.name} onChange={props.changeSelect} value={props.valueSelect}>
              <option key="choose" value="choose"> choose {props.name}</option>
                {
                      props.listeOfOptions.map((option, i) => { 
                      return (<option key={option+i} value={option}>{option}</option>)
                    }) 
               }
          </select>
      <span className="invalid-feedback"> {props.errorMessage}</span>
                
        </div>
    
    
    
    
    );


}

export default selectListe;