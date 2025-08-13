import { createRootRoute, createRoute } from "@tanstack/react-router";


export const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
})


export const routeTree = rootRoute.addChildren([
  indexRoute,
]);
