import React from 'react';
import "./Pagination.css"


const Pagination = (props) => {
  
    const pagesCount = Math.ceil(props.totalItems/props.itemsPerPage) ;
    const pages = [] ;
  
    for (let i = 1; i <= pagesCount; i++) {
      
      pages.push(i) ;
     }

    return(

  <ul className="pagination">
    <li className={"page-item " + (props.currentPage === 1 && " disabled")}>
      <button  className="page-link" onClick={()=>props.clickPage(props.typeProduct , props.currentPage - 1 , props.itemsPerPage)} >&laquo;</button>
    </li>

     {
        pages.map(page => {
    
    return (
        <li key={page} className={"page-item" + (page === props.currentPage && " active")}>
              <button key={"but"+page} className="page-link" onClick={()=>props.clickPage(props.typeProduct , page , props.itemsPerPage)}>{page}</button>
            </li>
            )
         })
    }
    
    <li className={"page-item "  + (props.currentPage === pagesCount && " disabled")}>
      <button className="page-link" onClick={()=>props.clickPage(props.typeProduct , props.currentPage + 1 , props.itemsPerPage)} >&raquo;</button>
    </li>
  </ul>






    )
}


export default Pagination;