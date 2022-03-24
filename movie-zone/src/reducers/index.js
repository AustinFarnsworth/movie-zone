import movieId from "./movieId";
import otherReducer from "./otherReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
  checkMovieId: movieId,
  other: otherReducer,
});

export default allReducers;
