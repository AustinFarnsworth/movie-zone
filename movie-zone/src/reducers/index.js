import movieId from "./movieId";
import otherReducer from "./otherReducer";
import {reducer as formReducer} from "redux-form";
import {combineReducers} from "redux";

const allReducers = combineReducers({
  checkMovieId: movieId,
  form: formReducer,
  other: otherReducer,
});

export default allReducers;
