import React from "react"
import { TableRow , TableHead } from "./index"
import Wrapper from "../Wrapper/Wrapper"
import Search from "../Searchbar/Search"
import API from "../../utils/API"
class Table extends React.Component{
    state ={
        symbol:'',
        stockInfo:[]
    }


    handleInputChange = event=>{
        const {name, value} = event.target
        // console.log('this', name, value)
        // const newState = {...this.state, ...{[name]: value}}

        this.setState({
            [name]: value
        })
    }

    

    handleSymbolSearch = event => {
        event.preventDefault()
        if(!this.state.symbol){
            return console.log("enter a symbol");
        }
        else{
            API.searchStock(this.state.symbol).then(res=>{
                console.log('API response ', res.data)
                const newState = {...this.state.stockInfo,  ...{[this.state.stockInfo]: res.data}}
                this.setState({
                stockInfo: newState
            })
            console.log("this is the stockInfo array", this.state.stockInfo)
        })
        }
    }


    render(){
        return(

            <Search 
            change={this.handleInputChange}
            submit={this.handleSymbolSearch}
            symbol={this.state.symbol}>

                <Wrapper>
                    <TableHead>
                        <TableRow
                        stockResults={this.state.stockInfo}
                        companyName={this.state.stockInfo.companyName}
                        latestPrice={this.state.stockInfo.latestPrice}
                        yearhigh={this.state.stockInfo.week52High}
                        >
                        </TableRow>
                    </TableHead>
                </Wrapper>
            </Search>
            
        )
    }
}

export default Table;