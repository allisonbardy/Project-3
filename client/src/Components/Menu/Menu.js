import React from 'react';
import './Menu.css'

const menu = () => {
    return(
    <div className="menu">
      <nav>
      <h1 className="logo"> DIVIDENDS PORTFOL.IO </h1>
        <ul className="menuItems">
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </div>
    )
}

export default menu;