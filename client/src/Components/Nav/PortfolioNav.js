import React from "react";
import { Link } from "react-router-dom";

import "./Navtabs.css"

function PortfolioNav() {
  return (
    <ul className="nav grad">
      <li className="nav-brand">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          D I V P O R T F O L . I O 
        </Link>
      </li>
      <li className="nav-item ml-auto">
        <Link
          to="/search"
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/watchlist"
          className={window.location.pathname === "/watchlist" ? "nav-link active" : "nav-link"}
        >
          Watchlist
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/"
          className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Sign Out
        </Link>
      </li>
    </ul>
  );
}

export default PortfolioNav;
