import { createRootRoute, createRoute } from "@tanstack/react-router";
import { authRoute, loginRoute } from "./Modules/Auth/Routes/AuthRoutes";
import { dashboardRoute } from "./Modules/Dashboard/Routes/DashboardRoutes";
import { userProfileroute } from "./Modules/Users/Routes/UsersRoutes";


export const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
})


export const routeTree = rootRoute.addChildren([
  indexRoute,
  authRoute.addChildren([
    loginRoute,
  ]),
  dashboardRoute.addChildren({
    userProfileroute
  }
  )
]);