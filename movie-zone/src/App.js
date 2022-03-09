import "./App.css";
import HeaderBar from "./components/headerBar";
import movieDatabase from "./api/movieDatabase";
import {useEffect} from "react";
import SearchBar from "./components/searchBar";

function App() {
  useEffect(() => {
    movieDatabase
      .get("/movie/550")
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <HeaderBar />
      <h3> The Movie Zone</h3>
      <SearchBar />
    </div>
  );
}

export default App;
