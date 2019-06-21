import React from 'react';
import './Search.css';

const search = (props) => {
  console.log(props)
   return (
    <div className="body" companyName={props.companyName} latestPrice={props.latestPrice} yearHigh={props.yearHigh}>
      <h1 className="title"> SEARCH FOR A STOCK </h1>
      <input type="text"  name="symbol" value={props.symbol} onChange={props.change}/>
      <button onClick={props.submit}> SUBMIT </button>
      {props.children}
    </div>
    
   )
}

export default search;