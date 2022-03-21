import "./App.css";
import {render} from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HeaderBar from "./components/headerBar";
import movieDatabase from "./api/movieDatabase";
import {useEffect} from "react";
import SearchBar from "./components/searchBar";
import SingleMovie from "./pages/singleMove";

function App() {
  useEffect(() => {
    movieDatabase
      .get("/movie/271110")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />

        <SearchBar />
        <Routes>
          <Route exact path="/movie" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
