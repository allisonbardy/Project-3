import React from "react"
import { TableRow , TableHead } from "./index"
import Wrapper from "../Wrapper/Wrapper"
import Search from "../Searchbar/Search"
import API from "../../utils/API"


import "./table.css"
import axios from "axios";


class Table extends React.Component{
    state ={
        symbol:'',
        stockInfo:[],
        divInfo:[]
    }


    handleInputChange = event=>{
        const {name, value} = event.target
        


        this.setState({
            [name]: value
        })
    }

    

    handleSymbolSearch = event => {
        event.preventDefault()
        if(!this.state.symbol){
            return ;
        }
        else{
            API.searchStock(this.state.symbol).then(res=>{
            this.setState({
                stockInfo:[...this.state.stockInfo, res.data]
            })
            API.getDividends5y(this.state.symbol).then(res=>{
                this.setState({
                    divInfo:[...this.state.divInfo, res.data]
                })
            })
            console.log("this is the stockInfo array", this.state.stockInfo)
            console.log('this is the divInfo array', this.state.divInfo)
        })


        }
    }

    ownOnClick = stockIdx => {
        // console.log(this.state.stockInfo[stockIdx])
        const stock= this.state.stockInfo[stockIdx]
        console.log(stock.symbol)

        let newOwned={
            symbol:stock.symbol,
        }  

        this.submitOwned(newOwned)
    }


        submitOwned(Stock){
    axios.post("/api/owned", Stock, function(req,res){
            console.log("Posted to Portfolio")
    })
}


    watchOnClick = stockIdx=>{
        const stock = this.state.stockInfo[stockIdx]
        
        let newWatched = {
            symbol: stock.symbol,
        }
        
        this.submitWatched(newWatched)
    }


        submitWatched(Stock){
            axios.post('/api/watched', Stock, function(req, res){
                console.log('Posted to Watchlist!')
            })
        }

    render(){
        console.log("I AM RENDERING")
        return(
          
            <Search 
            change={this.handleInputChange}
            submit={this.handleSymbolSearch}
            symbol={this.state.symbol}>
                <Wrapper>
                    <br/>
                    <br/>
                    <TableHead>
                        {this.state.stockInfo.map((stock, idx)=>(
                            <TableRow
                            key={stock.idx}
                            name={stock.companyName}
                            open={stock.open}
                            latestPrice={stock.latestPrice}
                            change={stock.changePercent}
                            volume={stock.latestVolume}
                            index={idx}
                            ownOnClick={this.ownOnClick}
                            watchOnClick={this.watchOnClick}
                            
                            />
                        ))}
                    </TableHead>
                </Wrapper>
            </Search>
            
        )
    }
}

export default Table;