// React and Redux.
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import AppContainer from "./AppContainer";
import * as serviceWorker from "./serviceWorker";

// Theme.
import GlobalStyle from "./constants/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./constants/theme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
