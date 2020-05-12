// React.
import React from "react";
import { Route } from "react-router-dom";

// Hooks.
import useAuthentication from "../hooks/useAuthentication";

function AuthenticatedRoute(props) {
  const authentication = useAuthentication();

  if (!props.protected || (props.protected && authentication.authenticated)) {
    return <Route {...props}></Route>;
  } else {
    return <h1>You are unable to reach this location :(</h1>;
  }
}

export default AuthenticatedRoute;
