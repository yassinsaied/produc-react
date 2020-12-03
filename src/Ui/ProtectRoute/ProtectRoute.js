import React  from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
    
    return  props.logged  
                         ? (<Route path={props.path} component={props.component} />)
                         : (<Redirect to="/login" />)
       
        

}

export default ProtectedRoute;