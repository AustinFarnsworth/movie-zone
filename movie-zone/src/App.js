import "./App.css";

import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HeaderBar from "./components/headerBar";
import SearchBar from "./components/searchBar";
import SingleMovie from "./pages/singleMovie";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderBar />

        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/singleMovie" component={SingleMovie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
