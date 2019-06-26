import React from "react"
import "./Watchlist.css"



export default function WatchlistRow(props) {
    // console.log(props)
    return (

        <tbody>
            <tr>
                <td>{props.companyName}</td>
                <td>{props.latestPrice}</td>
                <td>{props.yearHigh}</td>
            </tr>
        </tbody>
    )
}





