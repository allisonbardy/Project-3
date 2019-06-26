import React from "react"
import "./Portfolio.css"




export default function PortfolioRow(props) {
   
    return (                
                 <tbody>
                 <tr>
                    
                     <td>{props.symbol}</td>
                     <td>{props.close}</td>
                     <td>{props.open}</td>
                     <td>{props.latestPrice}</td>
                     <td>{props.change}</td>
                     {props.dividends ? (
                         <td>{props.dividends}</td>
                     ):
                     (
                        <td>N/A</td>
                     )
                     
                    } 
                    <td>{props.volume}</td>       
                     {/* <td><button onClick={() => props.ownOnClick(props.index)}></button></td>
                     <td><button onClick={() => props.watchOnClick(props.index)}></button></td> */}

                 </tr>
             </tbody>
             
            )
           
    
          }              