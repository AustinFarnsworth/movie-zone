import React, {useEffect, useState} from "react";
import "./recommendations.css";
import movieDatabase from "../api/movieDatabase";
import {useParams} from "react-router-dom";

function MovieRecommendations() {
  const [movieTitle, setMovieTitle] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    movieDatabase
      .get(`movie/${id}/recommendations`)
      .then((response) => {
        console.log(response.data.results);
        setMovieTitle(response.data.results.title);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  console.log(movieTitle);

  return (
    <div>
      <h1 className="title">Movie Recs</h1>

      <div>
        <ol>
          <li>{movieTitle}</li>
        </ol>
      </div>
    </div>
  );
}

export default MovieRecommendations;
