import React from "react"
import { TableRow , TableHead } from "./index"
import Wrapper from "../Wrapper/Wrapper"
import Search from "../Searchbar/Search"
import API from "../../utils/API"
import ApiContext from "../ApiContext/APIContext" 

import "./table.css"


class Table extends React.Component{
    state ={
        symbol:'',
        stockInfo:[]
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
            // let newState = {...this.state.stockInfo,  [this.state.stockInfo]: res.data}
                this.state.stockInfo.push(res.data)
            //     this.setState({
            //     stockInfo: newState
            // })
            const stockData = this.state.stockInfo

            this.setState({
                stockInfo:stockData
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

                    <br/><br/>

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