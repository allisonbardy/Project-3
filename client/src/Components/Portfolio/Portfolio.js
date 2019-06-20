import React from "react"
import "../Table/table.css"

<<<<<<< HEAD
const portfolio = () => {
   return (
   <div>
   <table className="table">
   <thead className="tableHead">
      <tr>
         <th scope="col">No.</th>
         <th scope="col">Stock Name</th>
         <th scope="col">Quantity</th>
         <th scope="col">Price</th>
         <th scope="col">Dividends</th>
         <th scope="col">Payout</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>MSFT</td>
         <td>4</td>
         <td>$131.40</td>
         <td>$0.46</td>
         <td>3 month</td>
      </tr>
=======
>>>>>>> 03311236b8f1ab32858984d66f64d180c61068cf

export default function Portfolio(props){
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