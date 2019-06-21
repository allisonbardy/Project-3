import React from "react"
import "./table.css"


export default function TableHead(props){
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