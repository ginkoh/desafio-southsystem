// React.
import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

// Hooks.
import useAuthentication from "../hooks/useAuthentication";
import usePageTitle from "../hooks/usePageTitle";

// Components.
import Sidebar from "../components/Sidebar";

// Ducks.
import { setActiveMenu } from "../ducks/sidebar";

// Utils.
import { entityServiceInfo } from "../constants/services";
import { useSelector, useDispatch } from "react-redux";

export function AuthenticatedRoute(props) {
  const authenticatedRouteBehavior = {};

  const { activeMenu } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <Fragment>
      {props.authentication.authenticated && (
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={(menuItem) => dispatch(setActiveMenu(menuItem))}
        />
      )}
      <Route {...props} {...authenticatedRouteBehavior}></Route>
    </Fragment>
  );
}

export function UnauthenticatedRoute(props) {
  const unauthenticatedRouteBehavior = {};

  return <Redirect to="/login" {...unauthenticatedRouteBehavior}></Redirect>;
}

function CustomRoute(props) {
  usePageTitle(
    props.pageTitle,
    props.exact || !props.path || props.path === "/login"
      ? ""
      : entityServiceInfo.pluralPrefix
  );

  const authentication = useAuthentication();

  if (!props.protected || (props.protected && authentication.authenticated)) {
    return (
      <AuthenticatedRoute
        {...props}
        authentication={authentication}
      ></AuthenticatedRoute>
    );
  } else {
    return <UnauthenticatedRoute {...props}></UnauthenticatedRoute>;
  }
}

export default CustomRoute;
