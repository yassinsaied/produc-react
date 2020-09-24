import React from 'react';
import NavBar from "./Components/NaveBar/NavBar"
import SideMenu from "./Components/SideMenu/SideMenu"
import ListProducts from "./Components/Products/ListProducts/ListProducts"
import {dataProduct} from "./data"


function App() {
  return (
  <>

<NavBar/>
<div className="row p-4">
<SideMenu/>
<div className="container col-sm">
<div className="row">
    <ListProducts allProducts={dataProduct}/>
 
    </div>  

    

    


  </div>
</div>

  </>
  );
}

export default App;
