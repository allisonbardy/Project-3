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
            </tr>
        </tbody>
    )
}              

