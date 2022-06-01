import React from "react";
import "./headerBar.css";
import {useSelector} from "react-redux";
import {useState} from "react";
import {MovieContext} from "../context/movieContext";
import {useContext} from "react";

function HeaderBar() {
  const id = useSelector((state) => state.checkMovieId);
  const [term, setTerm] = useState("");

  const {item} = useContext(MovieContext);

  function handleTerm(e) {
    e.preventDefault();

    setTerm(id);
  }

  return (
    <div className="header-container">
      <form onChange={handleTerm}>
        {/* <input
          type="text"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        /> */}
      </form>

      <h2 className="one">Welcome to The Movie Zone</h2>
      <p>{id}</p>
    </div>
  );
}

export default HeaderBar;
