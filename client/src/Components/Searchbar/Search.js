import React from 'react';
import './Search.css';

const search = (props) => {
   return (
    <div className="body">
      <h1 className="title"> SEARCH FOR A STOCK </h1>
      <input type="text"  name="symbol" value={props.symbol} onChange={props.change}/>
      <button onClick={props.submit}> SUBMIT </button>
      {props.children}
    </div>
    
   )
}

export default search;