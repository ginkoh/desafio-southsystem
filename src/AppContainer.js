// React and Redux.
import React, { Fragment } from "react";
import { Switch, Router, Route } from "react-router-dom";

// Routes.
import { routes } from "./constants/routes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import history from "./history";

function AppContainer() {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          {routes.map((route, idx) => {
            return (
              <AuthenticatedRoute
                exact={route.exact}
                key={idx}
                path={route.path}
                protected={route.protected}
                component={route.component}
              />
            );
          })}
          }
        </Switch>
      </Fragment>
    </Router>
  );
}

export default AppContainer;
