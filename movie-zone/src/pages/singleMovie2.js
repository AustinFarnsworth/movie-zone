import React from "react";
import {useEffect} from "react";
import "./singleMovie2.css";
import movieDatabase from "../api/movieDatabase";
import {useState} from "react";
import {MovieContext} from "../context/movieContext";
import {useContext} from "react";
import {useParams} from "react-router";

function SingleMovie2() {
  const [singleMovie, setSingleMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const {movieID} = useContext(MovieContext);
  const {id} = useParams();

  const imageURL = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    movieDatabase
      .get("/movie/284052")
      // .get("/movie/100402")

      .then((response) => {
        setSingleMovie(response.data);
        setGenre(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(`this is the movie id ${id}`);

  if (singleMovie.backdrop_path === null) {
    return (
      <div className="no-image-container">
        <h3>{singleMovie.title}</h3>
        <p> - movie poster not available -</p>
        <div className="title-container-secondary">
          <p>{singleMovie.release_date}</p>
          <div className="genre-container">
            {genre.map((el) => {
              return (
                <ul key={el.id}>
                  <li>{el.name}</li>
                </ul>
              );
            })}
          </div>
        </div>

        <div className="movie-info-container2">
          <h5>{singleMovie.tagline}</h5>
          <p>{singleMovie.runtime} mins</p>
          <h5> - Summary - </h5>
          <p>{singleMovie.overview}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="single-container">
      <div className="background-container">
        <img
          src={imageURL + singleMovie.backdrop_path}
          alt={singleMovie.title}
          className="background-pic"
        />
        <div className="title-container">
          <h3>{singleMovie.title}</h3>

          <div className="title-container-secondary">
            <p>{singleMovie.release_date}</p>
            <div className="genre-container">
              {genre.map((el) => {
                return (
                  <ul key={el.id}>
                    <li>{el.name}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-info-container">
        <h3>{id}</h3>
        <h5>{singleMovie.tagline}</h5>
        <p>{singleMovie.runtime} mins</p>
        <h5> - Summary - </h5>
        <p>{singleMovie.overview}</p>
      </div>
    </div>
  );
}

export default SingleMovie2;
