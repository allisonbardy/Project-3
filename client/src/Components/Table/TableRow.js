import React from "react"


export default function TableRow(props){
    console.log(props)
    return(
        
        <tbody>
            <tr>
            <td>{props.companyName}</td>
            <td>{props.latestPrice}</td>
            <td>{props.yearHigh}</td>
            </tr>
        </tbody>
    )
}





