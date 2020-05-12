// React and Redux.
import React, { Fragment } from "react";
import { Switch, Router, Route } from "react-router-dom";

// Routes.
import { routes } from "./constants/routes";
import CustomRoute from "./components/CustomRoutes";
import history from "./history";

function AppContainer() {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          {routes.map((route, idx) => {
            return (
              <CustomRoute
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
