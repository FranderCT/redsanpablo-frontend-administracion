import { createRoute, Outlet } from "@tanstack/react-router";
import { dashboardRoute } from "../../Dashboard/Routes/DashboardRoutes";
import UserProfile from "../Pages/UserProfile";
import EditProfile from "../Pages/EditProfile";
import ListUsers from "../Pages/ListUsers";

export const usersRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "users",
  component: () => <Outlet />,
});

export const usersIndexRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "/",
  component: ListUsers,
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
  component: EditProfile
});

