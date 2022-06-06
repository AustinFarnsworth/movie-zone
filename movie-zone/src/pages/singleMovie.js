import React, {useEffect} from "react";
import "./singleMovie.css";
import {Link} from "react-router-dom";
import {MovieContext} from "../context/movieContext";
import movieDatabase from "../api/movieDatabase";
import {useContext} from "react";
import {useParams} from "react-router";

function SingleMovie() {
  const {movieID} = useContext(MovieContext);
  const {id} = useParams();

  console.log(movieID);

  useEffect(() => {
    movieDatabase
      .get(`movie/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(`this is the movie id ${id}`);

  return (
    <div className="single-movie-page">
      <div className="link-container">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
      <div>{movieID.id}</div>
    </div>
  );
}

export default SingleMovie;
