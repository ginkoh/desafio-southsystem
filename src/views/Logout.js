// React.
import React from 'react';
import { Redirect } from "react-router-dom/cjs/react-router-dom";

// Hooks.
import useAuthentication from "../hooks/useAuthentication";

function LogoutPage() {
  const { authenticated, unauthenticate } = useAuthentication();
  unauthenticate();

  if (authenticated) return <h1>Logging out...</h1>;
  else {
    return <Redirect to="/login"></Redirect>;
  }
}

export default LogoutPage;
