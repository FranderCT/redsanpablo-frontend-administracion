import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../../Routes";
import AuthLayout from "../Layouts/AuthLayout";
import LoginUser from "../Pages/LoginUser";

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "auth",
   component: AuthLayout,
});

export const loginRoute = createRoute({
   getParentRoute: () => authRoute,
   path: "login",
   component: LoginUser,
})