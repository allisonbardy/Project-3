import React from "react"
import API from '../../utils/API'
import PortfolioHead from './PortfolioHead'
import PortfolioRow from './portfolioRow'
import PortfolioNav from '../Nav/PortfolioNav'
class Portfolio extends React.Component{
    state = {
        symbols:[],
        stockInfo:[],
        divInfo:[],
        apiRes:[],
        currUser:''
    }

   componentDidMount(){
       API.getOwned()
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
                // return result.data;
            })
            symbols.forEach(async symbol => {
                const result = await API.getDividends5y(symbol);
                this.setState({divInfo: [...this.state.divInfo, result.data]})
                console.log('divInfo ', this.state.divInfo)
                // return result.data;
            })
            /*
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
            */
        //    console.log('YOU ARE HERE WITH ', stockInfo)
        //     this.setState({
        //        apiRes: data,
        //        symbols: symbols,
        //        stockInfo: stockInfo,
        //        divInfo:divInfo
        //     })
            
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
        console.log('I AM RENDERNIG')
        return(
        
            <PortfolioHead
            user={this.state.currUser}
            >
                {this.state.stockInfo.map((stock, idx)=>(
                    <PortfolioRow
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
            </PortfolioHead>
        
        )
    }
}

export default Portfolio;

 