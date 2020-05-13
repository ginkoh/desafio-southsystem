// React and Redux.
import React, { Fragment } from "react";
import { Switch, Router } from "react-router-dom";

// Routes.
import { routes } from "../constants/routes";
import CustomRoute from "../components/CustomRoutes";
import history from "../utils/history";

function AppContainer() {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          {routes.map((routeProps, idx) => {
            return <CustomRoute {...routeProps} key={idx} />;
          })}
        </Switch>
      </Fragment>
    </Router>
  );
}

export default AppContainer;
