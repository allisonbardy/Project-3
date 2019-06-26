import React from "react"
import "./Portfolio.css"


export default function PortfolioHead(props) {
   return (
      <div className="container user">
         Welcome {props.user} <hr />
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">Stock Name</th>
                  <th scope="col">Close</th>
                  <th scope="col">Open</th>
                  <th scope="col">Latest Price</th>
                  <th scope="col">Change %</th>
                  <th scope="col">Dividends</th>
                  <th scope="col">Volume</th>
               </tr>
            </thead>
            {props.children}
         </table>
      </div>
   )
}