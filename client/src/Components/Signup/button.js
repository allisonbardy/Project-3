import React from "react"

export default function SubmitButton(props){
  return (
    <button {...props} className = "btn btn-success">
      {props.children}
    </button>
  )
}
