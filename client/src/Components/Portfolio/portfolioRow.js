import React from "react"
import "./Portfolio.css"




export default function PortfolioRow(props) {
    console.log(props.symbol, props.dividend)
   
    return (                
                 <tbody>
                 <tr>
                    
                     <td>{props.symbol}</td>
                     <td>{props.close}</td>
                     <td>{props.open}</td>
                     <td>{props.latestPrice}</td>
                     <td>{props.change}</td>
                     {props.dividend && props.dividend.divAmount ? (
                         <td>{props.dividend.divAmount}</td>
                     ):
                     (
                        <td>N/A</td>
                     )
                     
                    } 
                    <td>{props.volume}</td>       
                     {/* 
                     <td><button onClick={() <td><button onClick={() => props.ownOnClick(props.index)}></button></td>=> props.watchOnClick(props.index)}></button></td> */}

<<<<<<< HEAD
                 </tr>
             </tbody>
             
            )
           
    
          }             
=======
                }
                <td>{props.volume}</td>
            </tr>
        </tbody>
    )
}              

>>>>>>> 7f79f5e9a27e9ac93732a3ce668f5e93863a0c84
