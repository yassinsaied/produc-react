import React from "react";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./Components/NaveBar/NavBar";
import SideMenu from "./Components/SideMenu/SideMenu";
//import PromoProducts from "./Components/Products/PromoProducts/PromoProducts";
import ListProducts from "./Components/Products/ListProducts/ListProducts";
import SearchResult from "./Components/Products/SearchProducts/SearchProducts";
import ShippingCart from "./Components/ShippingCart/ShippingCart";
import dataProduct from "./data.json";
//import Modal from "./Components/Modal/Modal";

function App() {
  const NavBarwithRouter = withRouter(NavBar);

  return (
    <>
      <HashRouter>
        <NavBarwithRouter />

        <div className="row m-0 pt-3">
          <div className="col-sm-2">
            <SideMenu />
          </div>
          <div className="col-10">
            <Switch>
          
              <Route
                path="/search/:search"
                component={(props) => (
                  <SearchResult allProducts={dataProduct} {...props} />
                )}
              />
              <Route path="/shippingcart" component={ShippingCart} />
              
              <Route
                path="/:product"
                render={(props) => (
                  <ListProducts allProducts={dataProduct} {...props} />
                )}
              />
              <Route
                path="/"
                render={(props) => (
                  <ListProducts allProducts={dataProduct} {...props} />
                )}
              />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
