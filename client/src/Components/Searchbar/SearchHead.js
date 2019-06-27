import React from "react"
import "./Search.css"


export default function SearchHead(props) {
   return (
      <div className="container user">
         Search Results {props.user} <hr />
         <table className="table">
            <thead>
               <tr>
                  <th className ="titles" scope="col">Stock Name</th>
                  <th className ="titles" scope="col">Quantity</th>
                  <th className ="titles" scope="col">Open</th>
                  <th className ="titles" scope="col">Latest Price</th>
                  <th className ="titles" scope="col">Change %</th>
                  <th className ="titles" scope="col">Dividends</th>
                  <th className ="titles" scope="col">Volume</th>
               </tr>
            </thead>
            {props.children}
         </table>
      </div>
   )
}