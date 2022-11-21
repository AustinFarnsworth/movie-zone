import React from "react";
import "./headerBar.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function HeaderBar() {
  const id = useSelector((state) => state.checkMovieId);

  function handleTerm(e) {
    e.preventDefault();
  }

  return (
    <div className="header-container">
      <form onChange={handleTerm}></form>

      <h2 className="one">Welcome to The Movie Zone</h2>

      <div className="three">
        <Link to="/" className="button">
          Home
        </Link>
      </div>
    </div>
  );
}

export default HeaderBar;
