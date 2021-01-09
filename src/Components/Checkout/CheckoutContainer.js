import React , {Component} from "react"
import { connect } from "react-redux";
import {onLoadLocation , afterResponseOrfer} from "../../Store/actions/actionOrder"
import CheckoutCart from "./CheckoutCart/CheckoutCart"
import FormCheckout from "./FormCheckout/FormCheckout"
import Spinner from "../../Ui/Spinner/Spinner"


class checkout extends Component{
    

        componentDidMount() {
          
          if(Object.keys(this.props.allLocation).length === 0 ){
                this.props.onLoadLocation()
          }

        }


  componentDidUpdate(prevProps) {
    if (this.props.orderDone !== prevProps.orderDone) {
      setTimeout(() => {
        this.props.afterResponnseOrder()
        this.props.history.replace("/")
         }, 5000);   
       
         }


  }



      render() {
                return <>
                  { this.props.loding ?
                    <Spinner />
                    :
                    <div className="row">
                        {!this.props.orderDone  ?
                          <>
                        <CheckoutCart listProducts={this.props.listProducts} />
                        <FormCheckout allLocation={this.props.allLocation} listeOfStates={this.props.listeOfStates} />
                          </>
                          :
                        <p>{ this.props.messageOrderResult}</p> 
                        }
                                 
                    </div>
                  }
                      </>
    }
}
const mapStateToProps = (state) => {
  return {
    listProducts:  state.cartR.listProducts,
    loding: state.orderR.loding,
    orderDone: state.orderR.orderDone,
    messageOrderResult: state.orderR.messageOrderResult,
    allLocation:   state.formR.allLocation,
    listeOfStates: state.formR.listeOfStates
    
 
  };
};

const mapDispatchToState = (dispatch) => {
    
    return {
      onLoadLocation      : () => dispatch(onLoadLocation()),
      afterResponnseOrder : () => dispatch(afterResponseOrfer())
 
  
    }

}

export default connect(mapStateToProps , mapDispatchToState)(checkout);

