import React from "react"

import "./table.css"



export default function TableHead(props){
    return(
        <table className="table">
  <thead>
    <tr>

      <th scope="col">Company Name</th>
      <th scope="col">Open</th>
      <th scope="col">Latest Price</th>
      <th scope="col">Change</th>
      <th scope='col'>Volume</th>
      <th scope="col">Add to portfolio</th>
      <th scope="col">Save to Watchlist</th>

    </tr>
  </thead>
  {props.children}
  </table>
    )
}