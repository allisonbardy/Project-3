import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from './Components/Menu/Menu'
// import Search from "./Components/Searchbar/Search";
import Total from "./Components/Total/Total";
import ViewTabs from "./Components/Tabs/ViewsTab";
import Portfolio from "./Components/Portfolio/Portfolio";
import NavTabs from "./Components/Nav/Navtabs"
import {Table} from './Components/Table/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup/"

function App() {
  return (
    // <Table />
    <Router>
      <div>
        <NavTabs />
        <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/search" component={Table} />
        <Route exact path="/total" component={Total} />
        <Route exact path="/Viewtabs" component={ViewTabs} />
        <Route exact path ="/Portfolio" component={Portfolio} />
        <Route path ="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;