import React from "react"
import API from '../../utils/API'
import _ from 'lodash'
import WatchlistHead from "./WatchlistHead";
import WatchlistRow from "./WatchlistRow";
import Axios from "axios";

class Portfolio extends React.Component{

    state = {
        symbols:[],
        stockInfo:[],
        divInfo:[],
        apiRes:[],
        currUser:''
    }

   componentDidMount(){
       API.getWatched()
       .then(async res=>{
            const data = res.data
            const symbols = []
            // const stockInfo = []
            // const divInfo= []
            data.map((stock, i) => {
                symbols.push(stock.symbol)  
            })

            symbols.forEach(async symbol => {
                const result = await API.searchStock(symbol);
                this.setState({stockInfo: [...this.state.stockInfo, result.data]})
                console.log('stockinfo', this.state.stockInfo)
            })
            symbols.forEach(async symbol => {
                const result = await API.getDividends5y(symbol);
                const divResult = {
                    divAmount: result.data.length>0 ? result.data[0].amount: null,
                    symbol: symbol
                }
                this.setState({ divInfo: [...this.state.divInfo, divResult] })
                console.log('divInfo ', this.state.divInfo)
                
                // return result.data;
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
   portonclick= stockIdx=>{
    const stock = this.state.stockInfo[stockIdx]

    let newPort = {
        symbol: stock.symbol
    }
    
    this.submitPort(newPort)
}

    submitPort(Stock){
        Axios.post("/api/owned", Stock, function(req, res){
            console.log("Posted to Owned")
        })
    }

    render(){
        console.log('I AM RENDERNIG', this.state.divInfo.filter(divStock => divStock.symbol === 'AAPL')[0])//.divAmount
        return(
        
            <WatchlistHead>
            

                {this.state.stockInfo.map((stock, idx)=>(
               
                    <WatchlistRow
                    key={stock.idx}
                    symbol={stock.symbol}
                    open={stock.open}
                    close={stock.close}
                    latestPrice={stock.latestPrice}
                    // dividend={/.stringify(_.find(this.state.divInfo, function(o){return o.symbol==stock.symbol}).divAmount)}
                    dividend={this.state.divInfo.filter(divStock => divStock.symbol === stock.symbol)[0]}
                    change={stock.changePercent}
                    volume={stock.latestVolume}
                    click={this.portonclick}
                    index={idx}
                    />
                ))}
            </WatchlistHead>
        
        )
    }
}

export default Portfolio;
