// Redux.
import { compose, createStore, applyMiddleware } from "redux";
import { reducers } from "./ducks/reducers";

import thunk from "redux-thunk";

// Create store.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
