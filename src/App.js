import React from "react";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import NavBar from "./Components/NaveBar/NavBar";
import SideMenu from "./Components/SideMenu/SideMenu";
import PromoProducts from "./Components/Products/PromoProducts/PromoProducts";
import ListProducts from "./Components/Products/ListProducts/ListProducts";
import SearchResult from "./Components/Products/SearchProducts/SearchProducts";
import dataProduct from "./data.json";


function App() {
  const NavBarwithRouter = withRouter(NavBar);

  return (
    <>
      <HashRouter>
        <NavBarwithRouter />
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
                  path="/search/:search"
                  component={(props) => (
                    <SearchResult allProducts={dataProduct} {...props} />
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
