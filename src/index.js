import React from "react";
import ReactDOM from "react-dom";
import { createStore , combineReducers , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import App from "./App";
import cartReducer from "./Store/Reducers/cart";
import loginReducer from "./Store/Reducers/loginUser"
import orderReducer from "./Store/Reducers/order"
import formReducer from "./Store/Reducers/form"
import * as serviceWorker from "./serviceWorker";
import authApi from "./Services/authApi"

const persisteData = authApi.loadState();

const rootReducer = combineReducers({
  cartR : cartReducer,
  loginR: loginReducer,
  orderR : orderReducer,
  formR :   formReducer


});

const store = createStore(rootReducer , persisteData ,applyMiddleware(thunk));

 store.subscribe(()=>{

  authApi.saveState({

    cartR :  store.getState().cartR,
    loginR: store.getState().loginR,
    orderR: store.getState().orderR,
    
  
    
  

  });

})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();