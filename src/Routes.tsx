import { createRootRoute, Outlet, createRoute } from "@tanstack/react-router";
import { authRoute, loginRoute } from "./Modules/Auth/Routes/AuthRoutes";
import { dashboardRoute, dashboardIndexRoute } from "./Modules/Dashboard/Routes/DashboardRoutes";
import { userProfileEditRoute, userProfileRoute, userProfileShowRoute, usersIndexRoute, usersRoute } from "./Modules/Users/Routes/UsersRoutes";

export const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <div>Página No Encontrada</div>,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  // component: HeroPage, // opcional: renderiza tu landing aquí
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  authRoute.addChildren([loginRoute]),
  dashboardRoute.addChildren([
    usersRoute.addChildren([
      usersIndexRoute,
      userProfileRoute,
      userProfileEditRoute,
      userProfileShowRoute 
    ]),
    dashboardIndexRoute,
  ]),
]);
