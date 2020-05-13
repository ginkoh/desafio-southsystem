// Views.
import EntityList from "../views/EntityList";
import EntityDetail from "../views/EntityDetail";
import EntityCreation from "../views/EntityCreation";
import LoginPage from "../views/Login";
import LogoutPage from "../views/Logout";
import Dashboard from "../views/Dashboard";
import Page404 from "../views/404";

// Services.
import { entityServiceInfo } from "./services";

export const routesPrefix = entityServiceInfo.pluralPrefix;

const entitiesRoutes = [
  /**
   * Root route.
   */
  {
    path: "/",
    component: Dashboard,
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
    pageTitle: "Detalhes - ",
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
   * Logout fake route.
   */
  {
    path: "/logout",
    component: LogoutPage,
    protected: false,
    pageTitle: "Logout",
  },

  /**
   * 404 route.
   */
  {
    path: null,
    component: Page404,
    protected: false,
    pageTitle: "Erro",
  },
];

export const routes = [...entitiesRoutes, ...globalRoutes];
