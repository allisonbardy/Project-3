import React from "react"
import "./Watchlist.css"
import "./btn.css"


export default function WatchlistRow(props) {
    // console.log(props)
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
                    <td className ="text-center"><button className ="btn center"onClick={() => props.click(props.index)}>Add to portfolio</button></td>
            </tr>
        </tbody>
    )
}





