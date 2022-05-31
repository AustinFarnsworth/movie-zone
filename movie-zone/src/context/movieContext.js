import React from "react";

import {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const [movieID, setMovieID] = useState();

  return (
    <MovieContext.Provider
      value={{
        movieID: movieID,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
