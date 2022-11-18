import React from "react";

import {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const [movieID, setMovieID] = useState([]);

  const addMovieId = (id) => {
    setMovieID({...id, id});
  };
  return (
    <MovieContext.Provider
      value={{
        movieID: movieID,
        setMovieID,
        setMovieID,
        addMovieId,
        item: 13,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
