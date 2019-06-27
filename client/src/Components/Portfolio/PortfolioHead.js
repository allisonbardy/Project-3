import React from "react"
import "./Portfolio.css"


export default function PortfolioHead(props) {
   return (
      <div className="container user">
         Welcome {props.user} <hr />
         <table className="table">
            <thead>
               <tr>
                  <th className ="titles" scope="col">Stock Name</th>
                  <th className ="titles" scope="col">Close</th>
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