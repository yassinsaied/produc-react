import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NaveBar/NavBar";
import SideMenu from "./Components/SideMenu/SideMenu";
import PromoProducts from "./Components/Products/ListProducts/PromoProducts";
import ListProducts from "./Components/Products/ListProducts/ListProducts";
import dataProduct from "./data.json";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <div className="row p-4">
          <SideMenu />
          <div className="container col-sm">
            <div className="row">
              <Switch>
                <Route
                  path="/products/:product"
                  render={(props) => (
                    <ListProducts allProducts={dataProduct} {...props} />
                  )}
                />
                <Route
                  path="/"
                  render={(props) => (
                    <PromoProducts allProducts={dataProduct} {...props} />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
