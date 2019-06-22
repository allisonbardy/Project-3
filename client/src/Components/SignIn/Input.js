import React from "react"

import "../Signup/Signup.css"


export default function Input(props){
    return(
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}