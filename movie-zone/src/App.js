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
import SingleMovie2 from "./pages/singleMovie2";

// import {useSelector} from "react-redux";

function App() {
  return (
    <MovieContextProvider>
      <Router>
        <div className="App">
          <HeaderBar />
          {/* <SingleMovie2 /> */}

          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/singleMovie/:id" component={SingleMovie2} />
            <Redirect to={"/"} />
          </Switch>
        </div>
      </Router>
    </MovieContextProvider>
  );
}

export default App;
