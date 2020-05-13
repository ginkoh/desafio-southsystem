// React.
import React from "react";
import { Redirect } from "react-router-dom";

// Hooks.
import useAuthentication from "../hooks/useAuthentication";

// Third party.
import { useFormik } from "formik";
import { loginUser, DEFAULT_USERNAME, DEFAULT_PASSWORD } from "../constants";

function LoginPage() {
  const { authenticated, authenticate } = useAuthentication();
  const formik = useFormik({
    initialValues: {
      username: DEFAULT_USERNAME,
      password: DEFAULT_PASSWORD,
    },
    onSubmit: ({ username, password }) => {
      if (!authenticated && loginUser(username, password)) {
        authenticate();
      }
    },
  });

  return authenticated ? (
    <Redirect to="/"></Redirect>
  ) : (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username"></label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginPage;
