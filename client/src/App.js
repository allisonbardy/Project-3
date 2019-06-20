import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from './Components/Menu/Menu'
import Search from "./Components/Searchbar/Search";
import Image from "./Components/Image/Image";
import Welcome from "./Components/Welcome/Welcome";
import Total from "./Components/Total/Total";
// import ViewTabs from "./Components/Tabs/ViewsTab";
import Graphs from "./Components/Graphs/Graphs";
import Portfolio from "./Components/Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
    <div>
      <Menu />
      <Image />
      <Search />

      <Welcome />
      {/* <ViewTabs />  */}
      <Graphs />
      <Portfolio />
      <Total />
    </div>
    )
  }
}

export default App;