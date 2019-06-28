import React from "react";
import { Link } from "react-router-dom";

import "./Navtabs.css"

function SignInNav() {
  return (
    <ul className="nav grad">
      <li className="nav-brand">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          D I V P O R T F O L . I O 
        </Link>
      </li>
    </ul>
  );
}

export default SignInNav;