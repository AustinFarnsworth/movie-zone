import React, {useEffect, useState} from "react";
import "./recommendations.css";
import movieDatabase from "../api/movieDatabase";
import {useParams} from "react-router-dom";

function MovieRecommendations() {
  const [movieTitle, setMovieTitle] = useState([]);

  const {id} = useParams();

  const imageURL = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    movieDatabase
      .get(`movie/${id}/recommendations`)
      .then((response) => {
        console.log(response.data.results);
        setMovieTitle(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="title">Movie Recommendations</h1>

      <div className="rec-image-container">
        {movieTitle.map((rec) => {
          movieTitle.sort(function (a, b) {
            return b.id - a.id;
          });

          return (
            <div className="rec-movies-list">
              {/* <li>{rec.title}</li> */}
              <img src={imageURL + rec.poster_path} alt={rec.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieRecommendations;
