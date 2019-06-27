import React from "react"
import "./Search.css"

export default function SearchRow(props) {

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
                ) :
                    (
                        <td>N/A</td>
                    )

                }
                <td>{props.volume}</td>
            </tr>
        </tbody>
    )
}              