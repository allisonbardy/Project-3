import React from 'react'


const ApiContext = React.createContext({
    symbol:'',
    stockInfo:'',
    onChange:()=> undefined,
    onClick:()=>undefined
})


export default ApiContext