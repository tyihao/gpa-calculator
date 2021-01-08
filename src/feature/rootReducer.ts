import { combineReducers } from "redux";
import { OptReducer } from "./optimise";
import { login } from './account/reducer'

const rootReducer = combineReducers({
  opt: OptReducer,
  login,
});

export default rootReducer;
