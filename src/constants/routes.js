// React.
import React from "react";

import EntityList from "../views/EntityList";
import EntityDetail from "../views/EntityDetail";
import EntityCreation from "../views/EntityCreation";
import LoginPage from "../views/Login";

// Utils.
import { entityServiceInfo } from "./services";

export const routesPrefix = entityServiceInfo.prefix + "s";

const entitiesRoutes = [
  /**
   * Root route.
   */
  {
    path: "/",
    component: () => {
      return (
        <div>
          <h1>Dashboard</h1>
        </div>
      );
    },
    exact: true,
    protected: true,
    pageTitle: "Dashboard",
  },

  /**
   * Content routes.
   */
  {
    path: `/${routesPrefix}/all`,
    component: EntityList,
    protected: true,
    pageTitle: "Lista de ",
  },
  {
    path: `/${routesPrefix}/detail/:entityId`,
    component: EntityDetail,
    protected: true,
    pageTitle: "Detalhes -",
  },
  {
    path: `/${routesPrefix}/create`,
    component: EntityCreation,
    protected: true,
    pageTitle: "Criar ",
  },
];

const globalRoutes = [
  /**
   * Login route.
   */
  {
    path: "/login",
    component: LoginPage,
    protected: false,
    pageTitle: "Login",
  },

  /**
   * 404 route.
   */
  {
    path: null,
    component: () => {
      return <h1>404 - Page not found :(</h1>;
    },
    protected: false,
    pageTitle: "Erro",
  },
];

export const routes = [...entitiesRoutes, ...globalRoutes];
