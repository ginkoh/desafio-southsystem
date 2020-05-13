// Redux.
import { combineReducers } from "redux";

// Reducers.
import authentication from "./authentication";
import content from "./content";

export const reducers = combineReducers({
  authentication,
  content,
});
