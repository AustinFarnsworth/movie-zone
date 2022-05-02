import React from "react";
import "./headerBar.css";
import {useSelector} from "react-redux";

function HeaderBar() {
  const id = useSelector((state) => state.checkMovieId);

  // function handleTerm(e) {
  //   e.preventDefault();
  //   // this is a test for heroku

  //   setTerm(id);
  // }

  return (
    <div className="header-container">
      {/* <input
        type="text"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      /> */}
      <h2 className="one">Welcome to The Movie Zone</h2>
      <p>{id}</p>
    </div>
  );
}

export default HeaderBar;
