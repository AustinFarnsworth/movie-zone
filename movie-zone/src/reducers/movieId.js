const movieId = (state = "123", action) => {
  switch (action.type) {
    case "CHECK_MOVIE_ID":
      return state;
    default:
      return state;
  }
};

export default movieId;
