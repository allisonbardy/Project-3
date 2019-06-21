import React from "react"
import { TableRow , TableHead } from "./index"
import Wrapper from "../Wrapper/Wrapper"
import Search from "../Searchbar/Search"
import API from "../../utils/API"

import "./table.css"


class Table extends React.Component{
    state ={
        symbol:'',
        stockInfo:[]
    }


    handleInputChange = event=>{
        const {name, value} = event.target
        console.log('this', name, value)


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

                const newState = {...this.state.stockInfo,  ...res.data}
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

                    <br/><br/>

                    <TableHead>
                        <TableRow
                        stockResults={this.state.stockInfo}
                        >
                        </TableRow>
                    </TableHead>
                </Wrapper>
            </Search>
            
        )
    }
}

export default Table;