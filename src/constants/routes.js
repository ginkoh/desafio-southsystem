// React.
import React from "react";

import EntityList from "../views/EntityList";
import EntityDetail from "../views/EntityDetail";
import EntityCreation from "../views/EntityCreation";
import LoginPage from "../views/Login";

const entitiesRoutes = [
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
  },
  {
    path: "/entities/all/",
    component: EntityList,
    protected: true,
  },
  {
    path: "/entities/detail/:entityId",
    component: EntityDetail,
    protected: true,
  },
  {
    path: "/entities/create/",
    component: EntityCreation,
    protected: true,
  },

  {
    path: "/login",
    component: LoginPage,
    protected: false,
  },
];

const globalRoutes = [];

export const routes = [...entitiesRoutes, ...globalRoutes];
