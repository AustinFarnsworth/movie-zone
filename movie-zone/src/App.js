import "./App.css";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HeaderBar from "./components/headerBar";

import SearchBar from "./components/searchBar";
import SingleMovie from "./pages/singleMove";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderBar />

        <SearchBar />
        <Switch>
          <Route exact path="/movie" element={<SingleMovie />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
