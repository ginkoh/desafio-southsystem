// Redux.
import { compose, createStore, applyMiddleware, combineReducers } from "redux";

// Reducers.
import initial from "./ducks/initial";
import authentication from "./ducks/authentication";

// Store prefix.
export const STORE_PREFIX = `@@southsystem-challenge`;

const reducers = combineReducers({
  initial,
  authentication,
});

// Create store.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;
