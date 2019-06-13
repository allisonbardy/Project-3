import React from 'react';
import './Search.css';

const search = () => {
   return (
    <div className="body">
      <h1 className="title"> SEARCH FOR A STOCK </h1>
      <input className="search" placeholder = "SEARCH..."/>
      <button className="submit"> SUBMIT </button>
    </div>
    
   )
}

export default search;