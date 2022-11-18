const movieId = (state = "", action) => {
  switch (action.type) {
    case "CHECK_MOVIE_ID":
      return action.payload;

    default:
      return state;
  }
};

export default movieId;
