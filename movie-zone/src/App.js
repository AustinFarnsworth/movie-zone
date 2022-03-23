import "./App.css";
<<<<<<< HEAD

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HeaderBar from "./components/headerBar";

=======
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HeaderBar from "./components/headerBar";
>>>>>>> main
import SearchBar from "./components/searchBar";
import SingleMovie from "./pages/singleMovie";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Router>
        <HeaderBar />

        <SearchBar />
        <Switch>
          <Route exact path="/movie" element={<SingleMovie />} />
        </Switch>
      </Router>
    </div>
=======
    <Router>
      <div className="App">
        <HeaderBar />

        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/singleMovie" component={SingleMovie} />
        </Switch>
      </div>
    </Router>
>>>>>>> main
  );
}

export default App;
