import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../../Routes";
import AuthLayout from "../Layouts/AuthLayout";
import LoginUser from "../Pages/LoginUser";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";

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

export const forgotPasswordRoute = createRoute({
   getParentRoute: () => authRoute,
   path: "forgot-password",
   component: ForgotPassword,
})


export const resetPasswordRoute = createRoute({
  getParentRoute: () => authRoute,
  path : 'reset-password',
  component: ResetPassword
})
