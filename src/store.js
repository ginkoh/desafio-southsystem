// Redux.
import { compose, createStore, applyMiddleware, combineReducers } from "redux";

// Reducers.
import initial from "./ducks/initial";

const reducers = combineReducers({
  initial,
});

// Create store.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;
