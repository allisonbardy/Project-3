import React from "react"
import "./table.css"
import "../Watchlist/btn.css"
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
                     <td><button className ='btn small-text'onClick={() => props.ownOnClick(props.index)}> Portfolio </button></td>
                     <td><button className= 'btn small-text'onClick={() => props.watchOnClick(props.index)}>Watch this</button></td>
                 </tr>
             </tbody>
             
            )
            // </ApiContext.Consumer>
        
    
          }      // }          





