import React from "react"
import API from '../../utils/API'
import WatchlistHead from './WatchlistHead'
import WatchlistRow from './WatchlistRow'

class Watchlist extends React.Component{
    state={
        symbols:[],
        stockInfo:[],
        divInfo:[],
        apiRes:[],
        currUser:''
    }

   componentDidMount(){
       API.getOwned()
       .then(res=>{
            const data = res.data
            const symbols = []
            const stockInfo = []
            const divInfo= []
            data.map((stock, i) => {
                symbols.push(stock.symbol)  
            })

            symbols.map((symbol) => {
                API.searchStock(symbol).then(res=>{
                    console.log(res.data)
                    stockInfo.push(res.data)
                })
            
            })

            symbols.map((symbol)=>{
                API.getDividends5y(symbol).then(res=>{
                    divInfo.push(res.data)
                })
            })
            this.setState({
               apiRes: data,
               symbols: symbols,
               stockInfo: stockInfo,
               divInfo:divInfo
            })
            
       })
       API.getCurrUser()
       .then(res=>{
           const data= res.data
           const user = data.firstName

           this.setState({
               currUser: user
           })
           console.log(this.state)
       })
   }

    render(){
        return(
            <WatchlistHead
            user={this.state.currUser}
            >
                {this.state.stockInfo.map((stock, idx)=>(
                    <WatchlistRow
                    key={stock.symbol}
                    symbol={stock.symbol}
                    open={stock.open}
                    close={stock.close}
                    latestPrice={stock.latestPrice}
                    change={stock.changePercent}
                    volume={stock.latestVolume}
                    index={idx}
                    />
                ))}
            </WatchlistHead>
        )
    }
}

export default Watchlist;

 