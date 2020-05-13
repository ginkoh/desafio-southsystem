// React and Redux.
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import AppContainer from "./views/AppContainer";
import * as serviceWorker from "./serviceWorker";

// Theme.
import GlobalStyle from "./constants/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
