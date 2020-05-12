// React.
import React from "react";
import { Route } from "react-router-dom";

// Hooks.
import useAuthentication from "../hooks/useAuthentication";

export function AuthenticatedRoute(props) {
  const authenticatedRouteBehavior = {};

  return <Route {...props}></Route>;
}

export function UnauthenticatedRoute(props) {
  const unauthenticatedRouteBehavior = {};

  return <h1>You are unable to reach this location :(</h1>;
}

function CustomRoute(props) {
  const authentication = useAuthentication();

  if (!props.protected || (props.protected && authentication.authenticated)) {
    return <AuthenticatedRoute {...props}></AuthenticatedRoute>;
  } else {
    return <UnauthenticatedRoute {...props}></UnauthenticatedRoute>;
  }
}

export default CustomRoute;
