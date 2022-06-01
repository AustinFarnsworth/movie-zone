import React from "react";
import "./singleMovie.css";
import {Link} from "react-router-dom";
import {MovieContext} from "../context/movieContext";
import {useContext} from "react";

function SingleMovie() {
  const {item} = useContext(MovieContext);

  return (
    <div className="single-movie-page">
      <h1>- Movie Info Page Coming Soon -</h1>
      <div className="link-container">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
      <div>{item}</div>
    </div>
  );
}

export default SingleMovie;
