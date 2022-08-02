import React, {useEffect} from "react";
import "./recommendations.css";
import movieDatabase from "../api/movieDatabase";
import {useParams} from "react-router-dom";

function MovieRecommendations() {
  const {id} = useParams();
  useEffect(() => {
    movieDatabase
      .get(
        `movie/${id}/recommendations?api_key=<<api_key>>&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return <h1 className="title">Movie Recs</h1>;
}

export default MovieRecommendations;
