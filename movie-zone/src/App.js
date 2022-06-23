import "./App.css";
import {MovieContextProvider} from "./context/movieContext";
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
import NowPlaying from "./pages/nowPlaying";

// import {useSelector} from "react-redux";

function App() {
  return (
    <MovieContextProvider>
      <Router>
        <div className="App">
          <HeaderBar />

          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/singleMovie/:id" component={SingleMovie} />
            <Redirect to={"/"} />
          </Switch>

          <NowPlaying />
        </div>
      </Router>
    </MovieContextProvider>
  );
}

export default App;
