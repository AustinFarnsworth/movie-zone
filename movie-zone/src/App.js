import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HeaderBar from "./components/headerBar";
import SearchBar from "./components/searchBar";
import SingleMovie from "./pages/singleMovie";
// import SingleMovie2 from "./pages/singleMovie2";

// import {useSelector} from "react-redux";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderBar />
        {/* <SingleMovie2 /> */}

        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/singleMovie" component={SingleMovie} />
          <Redirect to={"/"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
