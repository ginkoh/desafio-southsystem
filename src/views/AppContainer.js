// React and Redux.
import React, { Fragment } from "react";
import { Switch, Router } from "react-router-dom";

// Components.
import CustomRoute from "../components/CustomRoutes";

// Utils.
import { routes } from "../constants/routes";
import history from "../utils/history";

// Third party.
import styled from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

const ApplicationFrame = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

function AppContainer() {

  return (
    <Router history={history}>
      <Fragment>
        <ApplicationFrame>
          <Switch>
            {routes.map((routeProps, idx) => {
              return <CustomRoute {...routeProps} key={idx} />;
            })}
          </Switch>
        </ApplicationFrame>
      </Fragment>
    </Router>
  );
}

export default AppContainer;
