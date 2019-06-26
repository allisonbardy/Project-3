import React from "react"
import API from '../../utils/API'
import WatchlistHead from './WatchlistHead'
import WatchlistRow from './WatchlistRow'

class Watchlist extends React.Component{
    state={
        symbols:[],
        stockInfo:[],
        apiRes:[]
    }

   componentDidMount(){
       API.getWatched()
       .then(res=>{
            const data = res.data
            const symbols = []
            const stockInfo = []
            data.map((stock, i) => {
                symbols.push(stock.symbol)  
            })

            symbols.map((symbol) => {
                API.searchStock(symbol).then(res=>{
                    console.log(res.data)
                    stockInfo.push(res.data)
                })
            })
            this.setState({
               apiRes: data,
               symbols: symbols,
               stockInfo: stockInfo
            })
            console.log(this.state)
       })
   }

    render(){
        return(
            <WatchlistHead>
                {this.state.stockInfo.map((stock, idx)=>(
                    <WatchlistRow
                    key={stock.symbol}
                    symbol={stock.symbol}
                    open={stock.open}
                    latestPrcice={stock.latestPrcice}
                    change={stock.change}
                    index={idx}
                    />
                ))}
            </WatchlistHead>
        )
    }
}

export default Watchlist;
