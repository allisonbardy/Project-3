import { Link } from "react-router-dom";
import React from "react"

import "../Menu/Menu.css"

function GetStartedButton(props){
  return (
    <Link to="/signup" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}><button className="get-started" {...props} > Get Started Today!

      {props.children}
    </button>
    </Link>
    
  )
}

export default GetStartedButton;