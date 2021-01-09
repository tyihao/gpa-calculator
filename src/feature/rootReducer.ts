import { combineReducers } from "redux";
import { ScoreReducer } from "./scores";

const rootReducer = combineReducers({
  score: ScoreReducer,
});

export default rootReducer;
