import React from "react"

export default function Wrapper(props){
    // console.log(props)
    return(

    
    <div className = "container">
        
        {props.children}
    </div>
    )
}
