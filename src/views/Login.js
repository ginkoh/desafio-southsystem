// React.
import React, { useMemo } from "react";
import { Redirect } from "react-router-dom";

// Hooks.
import useAuthentication from "../hooks/useAuthentication";

// Components..
import GenericForm from "../components/GenericForm";

// Utils.
import { loginUser, DEFAULT_USERNAME, DEFAULT_PASSWORD } from "../constants";

function LoginPage() {
  const { authenticated, authenticate } = useAuthentication();

  const formFields = useMemo(
    () => [
      {
        name: "username",
        type: "text",
        label: "Nome de usuario",
        extraProps: {},
      },
      { name: "password", type: "password", label: "Senha", extraProps: {} },
    ],
    []
  );

  const initialValues = useMemo(
    () =>
      formFields.reduce((acc, field) => {
        const fieldIsUsername = field.name === "username";

        acc[fieldIsUsername ? "username" : "password"] = fieldIsUsername
          ? DEFAULT_USERNAME
          : DEFAULT_PASSWORD;
        return acc;
      }, {}),
    [formFields]
  );

  const onSubmit = ({ username, password }) => {
    if (!authenticated && loginUser(username, password)) authenticate();
  };

  if (authenticated) return <Redirect to="/"></Redirect>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
      }}
    >
      <h1 style={{ color: "purple", marginTop: "50px" }}>FRONT DRAGON</h1>
      <GenericForm
        formFields={formFields}
        initialValues={initialValues}
        onSubmit={onSubmit}
        buttonValue="Entrar"
        style={{ marginTop: "50px" }}
      ></GenericForm>
    </div>
  );
}

export default LoginPage;
