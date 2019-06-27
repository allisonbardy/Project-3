import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from './Components/Menu/Menu'
import Search from "./Components/Searchbar/Search";
import Total from "./Components/Total/Total";
import ViewTabs from "./Components/Tabs/ViewsTab";
import Portfolio from "./Components/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
    <div>
      <Menu />
      <Search />
      <ViewTabs /> 
      <Total />
      <Portfolio />
    </div>
    )
  }
}

export default App;