import React from "react";
import {useEffect} from "react";
import "./singleMovie2.css";
import movieDatabase from "../api/movieDatabase";
import {useState} from "react";

function SingleMovie2() {
  const [singleMovie, setSingleMovie] = useState([]);
  const [genre, setGenre] = useState([]);

  const imageURL = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    movieDatabase
      .get("/movie/284053")
      .then((response) => {
        setSingleMovie(response.data);
        setGenre(response.data.genres);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="single-container">
      <div className="background-container">
        <img
          src={imageURL + singleMovie.backdrop_path}
          alt={singleMovie.title}
          className="background-pic"
        />
        <h3 className="title">{singleMovie.title}</h3>
      </div>
      <div className="movie-info-container">
        {genre.map((el) => {
          return (
            <ul key={el.id}>
              <li>{el.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default SingleMovie2;
