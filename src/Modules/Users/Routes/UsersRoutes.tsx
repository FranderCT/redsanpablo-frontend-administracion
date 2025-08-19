import { createRoute, Outlet } from "@tanstack/react-router";
import { dashboardRoute } from "../../Dashboard/Routes/DashboardRoutes";
import UserProfile from "../Pages/UserProfile";

export const usersRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "users",
  component: () => <Outlet />,
});

export const usersIndexRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "/",
  component: () => <h1>hola</h1>,
});

export const userProfileRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "profile",
  component: () => <Outlet />,
});

export const userProfileShowRoute = createRoute({
  getParentRoute: () => userProfileRoute,
  path: "/",
  component: UserProfile,
});

export const userProfileEditRoute = createRoute({
  getParentRoute: () => userProfileRoute,
  path: "edit",
  component: () => <div>hola mundo</div>,
});
