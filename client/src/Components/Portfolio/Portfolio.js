import React from "react"
import "../Table/table.css"
import "./Portfolio.css"

export default function Portfolio(props) {
   return (
      <div className="container user">
         Welcome, <hr />
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">Stock Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Change</th>
                  <th scope="col">% Change</th>
                  <th scope="col">Volume</th>
               </tr>
            </thead>
            {props.children}
         </table>
      </div>
   )
}