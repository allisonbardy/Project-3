import React from "react";
import "./App.css";
import Menu from './Components/Menu/Menu'
import ViewTabs from "./Components/Tabs/ViewsTab";
import { Portfolio }from "./Components/Portfolio/index";
import NavTabs from "./Components/Nav/Navtabs"
import {Table} from './Components/Table/index';
import ViewTabs from "./Components/Tabs/ViewsTab";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup/"
import { Watchlist } from "./Components/Watchlist/index"
import Signin from "./Components/SignIn/"
import SearchPage from "./pages/SearchPage";
import MainPage from "./pages/MainPage";



function App() {
  return (
   
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route path ="/watchlist" component={Watchlist} />
        <Route exact path="/Viewtabs" component={ViewTabs} />
        <Route exact path ="/Portfolio" component={Portfolio} />
        <Route path ="/signup" component={Signup} />

        <Route path ="/signin" component={Signin} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;