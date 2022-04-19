import React from "react";
import "./headerBar.css";
import {useSelector} from "react-redux";
import {useState} from "react";

function HeaderBar() {
  const [term, setTerm] = useState("");
  const id = useSelector((state) => state.checkMovieId);

  function handleTerm(e) {
    e.preventDefault();

    setTerm(id);
  }
  // console.log(term);
  console.log(id);

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
