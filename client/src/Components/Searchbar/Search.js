import React from 'react';
import './Search.css';

const Search = (props) => {
console.log(props)
   return (
    <div className="body">
      <h2 className="title"> Search For A Stock </h2>
      <input className="rounded-corners input-large" type="text"  name="symbol" value={props.symbol} onChange={props.change}/>
      <button className="rounded-corners" onClick={props.submit}> Submit </button> 
      {props.children}
    </div>
    
    
   )
}

export default Search;