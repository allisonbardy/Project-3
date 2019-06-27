import React from "react";
import { Link } from "react-router-dom";

import "./Navtabs.css"

function MainNav() {
  return (
    <ul className="nav grad">
      <li className="nav-brand">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          D I V P O R T F O L . I O 
        </Link>
      </li>
<<<<<<< Updated upstream
      <li className="nav-item">
=======
      <li className="nav-item ml-auto">
>>>>>>> Stashed changes
        <Link
          to="/signin"
          className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
}

export default MainNav;