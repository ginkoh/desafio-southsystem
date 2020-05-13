// React.
import React from "react";
import { Route } from "react-router-dom";

// Hooks.
import useAuthentication from "../hooks/useAuthentication";
import usePageTitle from "../hooks/usePageTitle";

// Utils.
import { entityServiceInfo } from "../constants/services";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

export function AuthenticatedRoute(props) {
  const authenticatedRouteBehavior = {};

  return <Route {...props} {...authenticatedRouteBehavior}></Route>;
}

export function UnauthenticatedRoute(props) {
  const unauthenticatedRouteBehavior = {};

  return <Redirect to="/login"></Redirect>;
}

function CustomRoute(props) {
  usePageTitle(
    props.pageTitle,
    props.exact || !props.path || props.path === "/login"
      ? ""
      : entityServiceInfo.prefix + "s"
  );

  const authentication = useAuthentication();

  if (!props.protected || (props.protected && authentication.authenticated)) {
    return <AuthenticatedRoute {...props}></AuthenticatedRoute>;
  } else {
    return <UnauthenticatedRoute {...props}></UnauthenticatedRoute>;
  }
}

export default CustomRoute;
