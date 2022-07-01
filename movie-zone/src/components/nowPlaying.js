import React from "react";
import "./nowPlaying.css";
import {useEffect} from "react";
import {useState} from "react";
import movieDatabase from "../api/movieDatabase";

function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);

  const imageURL = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    movieDatabase
      .get("/movie/now_playing")
      .then((response) => {
        setNowPlaying(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function nextSlides() {
    console.log("next");
  }

  function previousSlides() {
    console.log("previous");
  }

  return (
    <div className="now-playing-container">
      <h3>Movies Now Playing</h3>

      <div className="card-container">
        {nowPlaying.map((movie) => {
          nowPlaying.sort(function (a, b) {
            return b.id - a.id;
          });
          return (
            // <div className="top-container">
            //   <div className="now-playing-card">
            //     <img
            //       src={imageURL + movie.poster_path}
            //       alt={movie.title}
            //       className="image"
            //     />
            //   </div>
            // </div>

            <div className="slideshow-container">
              <div className="slides fade">
                <img
                  src={imageURL + movie.poster_path}
                  alt={movie.title}
                  className="image"
                />
              </div>

              <a className="previous" onClick={nextSlides}>
                &#10094;
              </a>
              <a className="next" onClick={previousSlides}></a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NowPlaying;
