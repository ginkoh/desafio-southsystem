// Redux.
import { combineReducers } from "redux";

// Reducers.
import authentication from "./authentication";
import content from "./content";
import sidebar from './sidebar';

export const reducers = combineReducers({
  authentication,
  content,
  sidebar
});
