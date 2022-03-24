import React from "react";
import "./headerBar.css";
import {useSelector} from "react-redux";

function HeaderBar() {
  const id = useSelector((state) => state.checkMovieId);

  return (
    <div className="header-container">
      <h2 className="one">Welcome to The Movie Zone</h2>
      <p>{id}</p>
    </div>
  );
}

export default HeaderBar;
