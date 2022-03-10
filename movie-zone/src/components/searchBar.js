import React from "react";
import "./searchBar.css";
import {useState} from "react";
import movieDatabase from "../api/movieDatabase";

function SearchBar() {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [image, setImage] = useState([]);

  const imageURL = "https://image.tmdb.org/t/p/w200";

  const onSearchTerm = (e) => {
    e.preventDefault();

    movieDatabase
      .get(`search/movie`, {
        params: {
          query: term,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
        setImage(response.data.results.poster_path);
        console.log(response.data.results);
      });
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={onSearchTerm}>
        <label>Search Movie Titles here</label>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        ></input>
      </form>

      <div className="movies-list">
        {movies.map((el) => {
          if (el.poster_path === null) {
            return (
              <div className="movie-card">
                <div key={el.id}>
                  {/* <img src={imageURL + el.poster_path} alt={el.title} /> */}
                  <h3>Image not available</h3>
                  <p>{el.title}</p>
                </div>
              </div>
            );
          }

          return (
            <div className="movie-card">
              <div key={el.id}>
                <img src={imageURL + el.poster_path} alt={el.title} />

                <p>{el.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;
