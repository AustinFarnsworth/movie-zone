import React from "react";
import "./searchBar.css";
import {useState} from "react";
import movieDatabase from "../api/movieDatabase";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import {MovieContext} from "../context/movieContext";
import {useContext} from "react";

function SearchBar() {
  const [term, setTerm] = useState("");
  const [movies, setMovies] = useState([]);
  // const [image, setImage] = useState([]);
  const {movieID, setMovieID} = useContext(MovieContext);

  const id = useSelector((state) => state.checkMovieId);

  const imageURL = "https://image.tmdb.org/t/p/w500";

  let history = useHistory();

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
        setMovieID(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReadMore = async (id) => {
    history.push(`singleMovie/${id}`);
  };

  

  return (
    <div className="search-bar-container">
      <form onSubmit={onSearchTerm}>
        <label className="label">Search Your Favorite Movie Titles here</label>

        <div>
          <input
            type="text"
            className="input-field"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          ></input>
          <button onClick={onSearchTerm} className="button">
            Search
          </button>
        </div>
      </form>

      <div className="movies-list">
        {movieID.map((el) => {
          movieID.sort(function (a, b) {
            return b.id - a.id;
          });
          if (el.poster_path === null) {
            return (
              <div className="movie-card">
                <div key={el.id} className="no-image">
                  <i className="fa-solid fa-image-slash">
                    - Image Not availabe -
                  </i>
                  <p>{el.title}</p>
                </div>
              </div>
            );
          }

          return (
            <div className="movie-card">
              <div key={el.id}>
                <div className="top-card-container">
                  <img
                    src={imageURL + el.poster_path}
                    alt={el.title}
                    className="poster"
                  />
                </div>
                <div className="bottom-card-container">
                  <h3>{el.title}</h3>
                  <h5> - Movie Summary -</h5>
                  <p className="movie-overview">{el.overview}</p>

                  <button
                    className="more-button"
                    onClick={() => handleReadMore(el.id)}
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;
