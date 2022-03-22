import React from "react";
import "./singleMovie.css";
import {Link} from "react-router-dom";

function SingleMovie() {
  return (
    <div className="single-movie-page">
      <h1>- Movie Info Page Coming Soon -</h1>
      <div className="link-container">
        <Link to="/" className="link">
          Home
        </Link>
      </div>
    </div>
  );
}

export default SingleMovie;
