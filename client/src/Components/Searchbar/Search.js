import React from 'react';
import './Search.css';

const search = () => {
  return (
    <form>
      <div className="form-group mx-sm-3 mb-2">
        Search For A Stock <br /><br />
        <input type="text" placeholder="Search..." />
        <button className="btn btn-sm" type="button submit">
        Submit</button>
      </div>
    </form>

  )
}

export default search;