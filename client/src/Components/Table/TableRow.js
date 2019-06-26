import React from "react"
import "./table.css"
// import ApiContext from "../ApiContext/APIContext"



export default function TableRow(props) {
   
    return (
        // <ApiContext.Consumer>
        //     {({ stock })=>(
                
                 <tbody>
                 <tr>
                     <td>{props.name}</td>
                     <td>{props.open}</td>
                     <td>{props.latestPrice}</td>
                     <td>{props.change}</td>
                     <td>{props.volume}</td>
                     <td><button onClick={() => props.ownOnClick(props.index)}></button></td>
                     <td><button onClick={() => props.watchOnClick(props.index)}></button></td>
                 </tr>
             </tbody>
             
            )
            // </ApiContext.Consumer>
        
    
          }      // }          





