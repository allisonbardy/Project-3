import React from 'react';
import './Portfolio.css';

const portfolio = () => {
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
         <td>MSFT</td>
         <td>4</td>
         <td>$131.40</td>
         <td>$0.46</td>
         <td>3 month</td>
      </tr>

      <tr>
         <th scope="row">2</th>
         <td>APPL</td>
         <td>6</td>
         <td>$190.15</td>
         <td>$0.77</td>
         <td>3 month</td>
      </tr>

      <tr>
         <th scope="row">3</th>
         <td>MSFT</td>
         <td>14</td>
         <td>$106.06</td>
         <td>$0.53</td>
         <td>3 month</td>
      </tr>
   </tbody>
   </table>
</div>
   )
}

export default portfolio;