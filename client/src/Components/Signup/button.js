import React from "react"

import "./Signup.css"

export default function SubmitButton(props){
  return (
    <button className="btn" {...props} > Submit

      {props.children}
    </button>
  )
}
