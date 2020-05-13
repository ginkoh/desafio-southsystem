// Redux.
import { compose, createStore, combineReducers } from "redux";

// Reducers.
import authentication from "./ducks/authentication";

const reducers = combineReducers({
  authentication,
});

// Create store.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;
