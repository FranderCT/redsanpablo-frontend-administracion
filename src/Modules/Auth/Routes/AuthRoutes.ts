import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../../Routes";

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "auth", 
});