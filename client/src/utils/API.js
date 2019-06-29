import axios from "axios"

export default 

{
    searchStock: function(query){
        return axios.get("https://sandbox.iexapis.com/stable/stock/" + query + "/quote/?token=Tpk_0493e81400594763aaba4ffb2b0eb5a7")
    },
   
    getDividends5y: function(query){
        return axios.get("https://sandbox.iexapis.com/stable/stock/" + query + "/dividends/5y?token=Tpk_0493e81400594763aaba4ffb2b0eb5a7")
    },

    getOwned: function(){
        return axios.get('/api/users/owned')
    },

    getWatched: function(){
        return axios.get('/api/users/watched')
    },

    getCurrUser: function(){
        return axios.get('/api/currentUser')
    },

    submitPort: function(Stock){
        return axios.post('/api/users/owned')
    }
    
}