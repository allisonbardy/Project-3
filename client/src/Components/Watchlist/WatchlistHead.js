import React from "react"

import "./Watchlist.css"



export default function WatchlistHead(props){
    return(
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
    )
}