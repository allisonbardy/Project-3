import React from 'react';
import './Portfolio.css';


class Portfolio extends React.Component {
   constructor() {
      super()
      this.state = {
         search: "",
         // id: "",
         // name: "",
         // quantity: "",
         // price: "",
         // dividends: "",
         // payout: "",

      }
   }

   render() {
      return (
         <div>
            <table class="table">
               <thead class="tableHead">
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
                     <td>{this.state.id}</td>
                     <td>{this.state.name}</td>
                     <td>{this.state.quantity}</td>
                     <td>{this.state.price}</td>
                     <td>{this.state.dividends}</td>
                     <td>{this.state.payout}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      )
   }
}


export default Portfolio