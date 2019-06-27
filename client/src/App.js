import React from "react";

import "./App.css";
import ViewTabs from "./Components/Tabs/ViewsTab";
// import {Table} from './Components/Table/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup/"

import Signin from "./Components/SignIn/"
// import Watchlist from "./Components/Watchlist/"
import SearchPage from "./pages/SearchPage";
// import SignInPage from "./pages/SignInPage";
import MainPage from "./pages/MainPage";
import PortfolioPage from "./pages/PortfolioPage";
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
// import WatchlistPage from "./pages/WatchlistPage"

function App() {
  return (
    // <Table />
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/searchbar" component={Menu} /> */}
        <Route exact path="/search" component={SearchPage} />
        {/* <Route exact path="/total" component={Total} /> */}
        {/* <Route path ="/watchlist" component={Watchlist} /> */}
        <Route exact path="/Viewtabs" component={ViewTabs} />
        <Route exact path ="/Portfolio" component={PortfolioPage} />
        {/* <Route exact path ="/watchlist" component={WatchlistPage} /> */}
        {/* <Route exact path ="/signin" component={SignInPage} /> */}
        <Route exact path ="/signup" component={SignUpPage} />
        <Route path ="/signin" component={SignInPage} />



        </Switch>
      </div>
    </Router>
  );
}

export default App;