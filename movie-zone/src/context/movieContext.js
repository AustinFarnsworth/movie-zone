import React from "react";

import {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const [movieID, setMovieID] = useState([]);

  const addMovieId = (id) => {
    setMovieID(id);
  };
  return (
    <MovieContext.Provider
      value={{
        movieID: movieID,
        addMovieId,
        item: 12,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
