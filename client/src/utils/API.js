import axios from "axios"

export default 

{
    searchStock: function(query){
        return axios.get("https://sandbox.iexapis.com/stable/stock/" + query + "/quote?token=Tpk_0493e81400594763aaba4ffb2b0eb5a7")
    },
   
    getOwnedStocks: function(){
        return axios.get("/api/users/stocks")
    }
}