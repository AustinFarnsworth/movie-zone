import React from "react";
import "./nowPlaying.css";
import {useEffect} from "react";
import {useState} from "react";
import movieDatabase from "../api/movieDatabase";

function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    movieDatabase
      .get("/movie/now_playing")
      .then((response) => {
        setNowPlaying(response.data.original_title);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="now-playing-container">
      <h3>Now Playing</h3>

      {nowPlaying.map((movie) => {
        nowPlaying.sort(function (a, b) {
          return b.id - a.id;
        });
        return (
          <div>
            <ul>
              <li>{movie.original_title}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default NowPlaying;
