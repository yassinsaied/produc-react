import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import "./SideMenu.css";


const SidMenu = (props) => {

  const [categorys, setCategorys] = useState([]);
  let listCategory ="";

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categorybyparent")
      .then((request) => {
        setCategorys(request.data["hydra:member"]);
        
        })
          .catch((error) => {
            console.log(error.response);
        });
    
  } , []);
  
 
  
  if (categorys !== null) {


       listCategory = categorys.map(category => {
         if(category.children.length === 0) {
            return (
              <NavLink key={category.id + category.name} to={"/"+category.id +"/"+ category.name} className="nav-link" activeClassName="active">
              {category.name}
              </NavLink>
              )
         } else {
           
           return (
             <>
           <li  data-toggle="collapse" data-target={"#cat"+category.id} class="collapsed nav-link">
                 {category.name}<i class="fa fa-caret-down"></i>
           </li>
                <ul class="sub-menu collapse" id={"cat"+category.id}>
                    {category.children.map(cheld => {
                   return (
                    <NavLink key={cheld.id} to={"/"+cheld.id +"/"+ cheld.name} className="nav-link" activeClassName="active">{cheld.name}</NavLink>
                    )
            
                   })
                 } 
               </ul>  





     
           </>
           )
        }
 
    });
  
  }


  return (

   <>
      <nav className="nav flex-column ">

        {listCategory}
        


      </nav>


   </>
  );
};

export default SidMenu;


 