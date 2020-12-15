import React , {Component} from "react"
import { connect } from "react-redux";
import {onLoadLocation} from "../../Store/actions/actionOrder"
import CheckoutCart from "./CheckoutCart/CheckoutCart"
import FormCheckout from "./FormCheckout/FormCheckout"


class checkout extends Component{
    

        componentDidMount() {
          
          if(Object.keys(this.props.allLocation).length === 0 ){
                this.props.onLoadLocation()
          }

        }



      render() {
                return <>
     
                        <div className="row">
                            <CheckoutCart listProducts={this.props.listProducts}/>
                            <FormCheckout allLocation= {this.props.allLocation} listeOfStates={this.props.listeOfStates} />
     
                                
                        </div> 

                      </>
    }
}
const mapStateToProps = (state) => {
  return {
    listProducts:  state.cartR.listProducts,
    allLocation:   state.loginR.allLocation,
    listeOfStates: state.loginR.listeOfStates
 
  };
};

const mapDispatchToState = (dispatch) => {
    
    return {
         onLoadLocation: () =>  dispatch(onLoadLocation())
 
  
    }

}

export default connect(mapStateToProps , mapDispatchToState)(checkout);

